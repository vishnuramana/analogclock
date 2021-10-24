import Util from "../../Util";

describe("Util tests", () => {
  it("returns hand angle as 450 when 30 seconds is passed", () => {
    expect(Util.getHandAngle({ type: "second", seconds: "30" })).toBe(450);
  });

  it("returns hand angle as 450 when 30 minutes is passed", () => {
    expect(Util.getHandAngle({ type: "minute", minutes: "30" })).toBe(450);
  });

  it("returns hand angle as 450 when 6 hours is passed", () => {
    expect(Util.getHandAngle({ type: "hour", hours: "6", minutes: "0" })).toBe(450);
  });

  it("returns hand angle as 450 when 6 hours is passed", () => {
    expect(Util.getHandAngle({ type: "hour", hours: "6", minutes: "31" })).toBe(465.5);
  });

  it("returns hand angle as 0 when type is not passed", () => {
    expect(
      Util.getHandAngle({ hours: "6", minutes: "30", seconds: "30" })
    ).toBe(0);
  });

  it("returns 0 when passed hour is invalid", () => {
    expect(
      Util.getHourIn12HrFormat(undefined)
    ).toBe(0);
  });

  it("returns passed hour when time is less than 12 hours", () => {
    expect(
      Util.getHourIn12HrFormat(10)
    ).toBe(10);
  });

  it("returns passed hour-12 when time is greater than 12 hours", () => {
    expect(
      Util.getHourIn12HrFormat(13)
    ).toBe(1);
  });
});
