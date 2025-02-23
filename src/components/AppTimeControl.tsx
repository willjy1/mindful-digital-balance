
import { useState } from "react";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import { Label } from "./ui/label";

const apps = [
  { id: 1, name: "Instagram", icon: "📱", defaultLimit: 60 },
  { id: 2, name: "TikTok", icon: "📱", defaultLimit: 45 },
  { id: 3, name: "Snapchat", icon: "📱", defaultLimit: 30 },
  { id: 4, name: "Twitter", icon: "📱", defaultLimit: 40 },
];

export const AppTimeControl = () => {
  const [limits, setLimits] = useState(
    apps.reduce((acc, app) => ({ ...acc, [app.id]: app.defaultLimit }), {})
  );
  const [enabled, setEnabled] = useState(
    apps.reduce((acc, app) => ({ ...acc, [app.id]: false }), {})
  );

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">App Time Limits</h2>
        <p className="text-muted-foreground">Set daily time limits for each app</p>
      </div>
      <div className="space-y-6">
        {apps.map((app) => (
          <div key={app.id} className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{app.icon}</span>
                <Label htmlFor={`limit-${app.id}`}>{app.name}</Label>
              </div>
              <Switch
                id={`enable-${app.id}`}
                checked={enabled[app.id]}
                onCheckedChange={(checked) =>
                  setEnabled((prev) => ({ ...prev, [app.id]: checked }))
                }
              />
            </div>
            {enabled[app.id] && (
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Time limit</span>
                  <span className="text-sm font-medium">{limits[app.id]} min</span>
                </div>
                <Slider
                  id={`limit-${app.id}`}
                  min={5}
                  max={180}
                  step={5}
                  value={[limits[app.id]]}
                  onValueChange={(value) =>
                    setLimits((prev) => ({ ...prev, [app.id]: value[0] }))
                  }
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
