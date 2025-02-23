
import { useState } from "react";
import { Layout } from "../components/Layout";
import { AppTimeControl } from "../components/AppTimeControl";
import { TimeWindowSetting } from "../components/TimeWindowSetting";
import { ScreenTimeMetrics } from "../components/ScreenTimeMetrics";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Timer, BarChart3, Clock } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>("limits");

  return (
    <Layout>
      <div className="min-h-screen w-full bg-background animate-fadeIn">
        <div className="container px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-primary">MindSync</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take control of your digital well-being with intelligent app usage management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Button
              variant={activeTab === "limits" ? "default" : "outline"}
              className="h-20 flex flex-col items-center justify-center space-y-2"
              onClick={() => setActiveTab("limits")}
            >
              <Timer className="h-6 w-6" />
              <span>App Limits</span>
            </Button>
            <Button
              variant={activeTab === "window" ? "default" : "outline"}
              className="h-20 flex flex-col items-center justify-center space-y-2"
              onClick={() => setActiveTab("window")}
            >
              <Clock className="h-6 w-6" />
              <span>Time Window</span>
            </Button>
            <Button
              variant={activeTab === "metrics" ? "default" : "outline"}
              className="h-20 flex flex-col items-center justify-center space-y-2"
              onClick={() => setActiveTab("metrics")}
            >
              <BarChart3 className="h-6 w-6" />
              <span>Metrics</span>
            </Button>
          </div>

          <Card className="p-6">
            {activeTab === "limits" && <AppTimeControl />}
            {activeTab === "window" && <TimeWindowSetting />}
            {activeTab === "metrics" && <ScreenTimeMetrics />}
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
