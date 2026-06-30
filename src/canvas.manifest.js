export const manifest = {
  screens: {
    scr_5ptoyj: { name: "Home", route: "/", position: { "x": 0, "y": 0 }, isDefaultRow: true },
    scr_ervr51: { name: "Tours", route: "/tours", position: { "x": 160, "y": 1820 } },
    scr_hmijsp: { name: "Tour Details", route: "/tours/7-days-cultural-discovery", position: { "x": 1560, "y": 1820 } },
    scr_h8rare: { name: "Tour Collection", route: "/tour-collections/luxury", position: { "x": 2960, "y": 1820 } },
    scr_iy06u1: { name: "Destinations", route: "/destinations", position: { "x": 160, "y": 3800 } },
    scr_aj6mnx: { name: "Destination Detail", route: "/destinations/sigiriya", position: { "x": 1560, "y": 3800 } },
    scr_xm2u41: { name: "Experiences", route: "/experiences", position: { "x": 160, "y": 5780 } },
    scr_q1c98n: { name: "Travel Guide", route: "/travel-guide", position: { "x": 160, "y": 7760 } },
    scr_pjp5nj: { name: "Testimonials", route: "/testimonials", position: { "x": 1560, "y": 7760 } },
    scr_m49oxc: { name: "About Us", route: "/about", position: { "x": 2960, "y": 7760 } },
    scr_rx5mul: { name: "Contact", route: "/contact", position: { "x": 4360, "y": 7760 } },
    scr_j2kp24: { name: "Trip Planner", route: "/trip-planner", position: { "x": 160, "y": 9740 } },
    scr_zsemnc: { name: "Custom Tour Builder", route: "/custom-tour", position: { "x": 1560, "y": 9740 } },
    scr_m2qwo5: { name: "Hotels & Stays", route: "/hotels", position: { "x": 160, "y": 11720 } },
    scr_s553vp: { name: "Offers", route: "/offers", position: { "x": 1400, "y": 0 }, isDefaultRow: true },
    scr_4wwhw6: { name: "Transport", route: "/transport", position: { "x": 1560, "y": 11720 } },
    scr_op8hmz: { name: "Visa & Requirements", route: "/visa-requirements", position: { "x": 5760, "y": 7760 } },
    scr_n87rlh: { name: "FAQ", route: "/faq", position: { "x": 7160, "y": 7760 } },
    scr_d0uotd: { name: "Saved Journeys", route: "/saved", position: { "x": 160, "y": 13700 } },
    scr_jqu8g9: { name: "Compare Tours", route: "/compare", position: { "x": 2960, "y": 9740 } }
  },
  sections: {
    sec_v01qp1: { name: "Tours discovery", x: 0, y: 1600, width: 4320, height: 1180 },
    sec_pdbdx9: { name: "Destinations discovery", x: 0, y: 3580, width: 2920, height: 1180 },
    sec_3h0n2o: { name: "Experiences", x: 0, y: 5560, width: 1520, height: 1180 },
    sec_3pxwb2: { name: "Information pages", x: 0, y: 7540, width: 8520, height: 1180 },
    sec_0of8hz: { name: "Trip planning tool", x: 0, y: 9520, width: 4320, height: 1180 },
    sec_xhxx1t: { name: "Booking & Services", x: 0, y: 11500, width: 2920, height: 1180 },
    sec_tercpk: { name: "Saved Journeys", x: 0, y: 13480, width: 1520, height: 1180 }
  },
  layers: [
  { kind: "screen", id: "scr_5ptoyj" },
  { kind: "section", id: "sec_v01qp1", children: [
    { kind: "screen", id: "scr_ervr51" },
    { kind: "screen", id: "scr_hmijsp" },
    { kind: "screen", id: "scr_h8rare" }]
  },
  { kind: "section", id: "sec_pdbdx9", children: [
    { kind: "screen", id: "scr_iy06u1" },
    { kind: "screen", id: "scr_aj6mnx" }]
  },
  { kind: "section", id: "sec_3h0n2o", children: [
    { kind: "screen", id: "scr_xm2u41" }]
  },
  { kind: "section", id: "sec_3pxwb2", children: [
    { kind: "screen", id: "scr_q1c98n" },
    { kind: "screen", id: "scr_pjp5nj" },
    { kind: "screen", id: "scr_m49oxc" },
    { kind: "screen", id: "scr_rx5mul" },
    { kind: "screen", id: "scr_op8hmz" },
    { kind: "screen", id: "scr_n87rlh" }]
  },
  { kind: "section", id: "sec_0of8hz", children: [
    { kind: "screen", id: "scr_j2kp24" },
    { kind: "screen", id: "scr_zsemnc" },
    { kind: "screen", id: "scr_jqu8g9" }]
  },
  { kind: "screen", id: "scr_s553vp" },
  { kind: "section", id: "sec_xhxx1t", children: [
    { kind: "screen", id: "scr_m2qwo5" },
    { kind: "screen", id: "scr_4wwhw6" }]
  },
  { kind: "section", id: "sec_tercpk", children: [
    { kind: "screen", id: "scr_d0uotd" }]
  }]

};