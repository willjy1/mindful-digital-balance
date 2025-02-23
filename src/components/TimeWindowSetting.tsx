
import { useState } from "react";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export const TimeWindowSetting = () => {
  const [enabled, setEnabled] = useState(false);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");

  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = i.toString().padStart(2, "0");
    return `${hour}:00`;
  });

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Time Window</h2>
        <p className="text-muted-foreground">Set allowed usage hours</p>
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="time-window">Enable time window</Label>
        <Switch id="time-window" checked={enabled} onCheckedChange={setEnabled} />
      </div>

      {enabled && (
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Start time</Label>
            <Select value={startTime} onValueChange={setStartTime}>
              <SelectTrigger>
                <SelectValue placeholder="Select start time" />
              </SelectTrigger>
              <SelectContent>
                {hours.map((hour) => (
                  <SelectItem key={hour} value={hour}>
                    {hour}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>End time</Label>
            <Select value={endTime} onValueChange={setEndTime}>
              <SelectTrigger>
                <SelectValue placeholder="Select end time" />
              </SelectTrigger>
              <SelectContent>
                {hours.map((hour) => (
                  <SelectItem key={hour} value={hour}>
                    {hour}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </div>
  );
};
