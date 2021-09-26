import Util from "../../Util";

describe("Util tests", () => {
  it("returns hand angle as 450 when 30 seconds is passed", () => {
    expect(Util.getHandAngle({ type: "second", seconds: "30" })).toBe(450);
  });

  it("returns hand angle as 450 when 30 minutes is passed", () => {
    expect(Util.getHandAngle({ type: "minute", minutes: "30" })).toBe(450);
  });

  it("returns hand angle as 450 when 6 hours is passed", () => {
    expect(Util.getHandAngle({ type: "hour", hours: "6" })).toBe(450);
  });

  it("returns hand angle as 0 when type is not passed", () => {
    expect(
      Util.getHandAngle({ hours: "6", minutes: "30", seconds: "30" })
    ).toBe(0);
  });
});
