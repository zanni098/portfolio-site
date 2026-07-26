import type { ShippedWork } from "./types";

export const theReef: ShippedWork = {
  slug: "the-reef",
  kind: "film",
  title: "The Reef",
  tagline: "A 60-second animated short about routine, and what routine hides.",
  logline:
    "Three maintenance drones have serviced the same sunken ocean liner for sixty years. Today one of them finds a door that isn't on the chart.",
  publishedAt: "2026-07-25",
  videoId: "ETkhS7ZwtWQ",

  facts: [
    { label: "Runtime", value: "60 seconds · 8 shots at 7.5s" },
    { label: "Format", value: "21:9 anamorphic, 4K" },
    { label: "Engine", value: "Seedance 2.0 via Higgsfield" },
    { label: "Elements", value: "11 reference assets" },
    { label: "Dialogue", value: "16 lines, all voiceover" },
    { label: "Assembly", value: "ffmpeg concat, CRF 16" },
  ],

  intro: [
    {
      heading: "What it is",
      paragraphs: [
        "The Reef is a sixty-second animated short built entirely from generated footage. Three maintenance drones — Hull, Pip and Meridian — have serviced the same wreck since it went down. They have a chart, a route, and sixty years of habit. The film is about the moment habit runs out.",
        "It is deliberately small. One location, three characters, no humans, and a single turn. Everything in the first five shots exists to make the sixth shot land.",
      ],
    },
    {
      heading: "The constraint that shaped everything",
      paragraphs: [
        "Seedance 2.0 has a hard eight-second generation cap. That is not a limitation you work around — it is the structure. Eight shots at 7.5 seconds each gives exactly sixty seconds with headroom, and every prompt states its duration explicitly so no generation ever runs against the ceiling.",
        "Working to a fixed shot length changes how you write. There is no room to establish and then pay off inside a single shot, so each one does exactly one thing and hands the next its setup. The cut does the work that a camera move would do in live action.",
      ],
    },
  ],

  cast: [
    {
      name: "HULL",
      silhouette: "Slab",
      scale: "Two humans stacked head to toe",
      character:
        "Slow, literal, does the actual work. Corrects vocabulary without ever looking up.",
    },
    {
      name: "PIP",
      silhouette: "Sphere",
      scale: "A human head",
      character:
        "Fast and enthusiastic. Asks the questions nobody else asks anymore.",
    },
    {
      name: "MERIDIAN",
      silhouette: "Needle",
      scale: "Three humans stacked, no wider than an arm",
      character: "Ancient and pedantic. Speaks in specifications. Dry.",
    },
  ],

  script: [
    {
      n: 1,
      time: "0:00–0:07.5",
      beat: "Descent. The wreck below in godrays.",
      dialogue:
        'PIP: "Sixty years on the same boat." · HULL: "Ship." · PIP: "Sixty years and you still correct me."',
    },
    {
      n: 2,
      time: "0:07.5–0:15",
      beat: "Interior corridor. Silt. Work lamps.",
      dialogue:
        'MERIDIAN: "Compartment fourteen. Structural integrity, ninety-one percent." · HULL: "It was ninety-one last year." · MERIDIAN: "It was."',
    },
    {
      n: 3,
      time: "0:15–0:22.5",
      beat: "The grand staircase. Chandelier drifting.",
      dialogue:
        'PIP: "What did they use this for?" · MERIDIAN: "They descended slowly. So that others could watch them descending."',
    },
    {
      n: 4,
      time: "0:22.5–0:30",
      beat: "Pip finds a sealed door that isn't mapped.",
      dialogue:
        'PIP: "Meridian. This one isn\'t on the chart." · MERIDIAN: "Everything is on the chart." · PIP: "Then what\'s this?"',
    },
    {
      n: 5,
      time: "0:30–0:37.5",
      beat: "Hull cuts the door. Light spills through the seam.",
      dialogue: 'HULL: "Stand back."',
    },
    {
      n: 6,
      time: "0:37.5–0:45",
      beat: "THE REVEAL. The ballroom is a living reef.",
      dialogue: 'MERIDIAN: "…That is not on the chart."',
    },
    {
      n: 7,
      time: "0:45–0:52.5",
      beat: "Wide. Three small drones in the doorway.",
      dialogue:
        'PIP: "How long?" · MERIDIAN: "Sixty years." · HULL: "We kept the walls up."',
    },
    {
      n: 8,
      time: "0:52.5–1:00",
      beat: "Hull's torch ignites, then goes out.",
      dialogue:
        'PIP: "Can we come back tomorrow?" · HULL: "We come back every day." · PIP: "I know. I just like asking."',
    },
  ],

  craft: [
    {
      heading: "The colour arc is the spine",
      paragraphs: [
        "Shots one to five hold a cold, desaturated green-blue. The only warmth anywhere is the drones' amber work lamps, and in shot four a thin line of light bleeding under a sealed door. Shot six is the only saturated frame in the film. Shots seven and eight keep the colour but let it settle.",
        "Five shots of restraint buy one shot of colour. Every first-half prompt ends with the instruction that saturation stays low, and a good-looking colourful batch from that half has to be rejected — because a pretty shot three costs you shot six. That is the single hardest discipline in the whole production.",
      ],
    },
    {
      heading: "Three rules that decide whether it holds together",
      paragraphs: [
        "Character sheets go on flat neutral mid-grey, evenly lit, with no environment. Anything else and the model starts inferring lighting from context.",
        "One head only per sheet. A sheet that comes back with multiple face variants causes identity drift by shot five, so all but one must be erased before upload.",
        "Environments at a three-quarter angle, never flat head-on. Head-on plates give a camera move nothing to work with.",
      ],
    },
    {
      heading: "No mouths, so nothing can desync",
      paragraphs: [
        "None of the three characters has a face. Hull has a horizontal amber light bar, Pip has a lens that is explicitly not an eye, and Meridian has a ring of twelve green indicator lights. All sixteen lines are voiceover.",
        "This is a deliberate structural choice rather than a stylistic one. Generated video cannot hold reliable lip sync, so the design removes the possibility of the failure instead of trying to solve it.",
      ],
    },
    {
      heading: "Sound does as much as colour",
      paragraphs: [
        "Shots one to five are enclosed, muffled and pressurised — narrow stereo, heavy damping. At the cut to shot six the reverb and stereo width open hard. That acoustic bloom carries as much of the reveal as the saturation does.",
        "There is no music until shot six. Something small and warm enters there and carries to the end. The whole mix is delivered at -14 LUFS.",
      ],
    },
  ],

  productionDoc: "the-reef.production.md",

  links: [
    {
      label: "Watch the full film on YouTube",
      url: "https://youtu.be/ETkhS7ZwtWQ",
      kind: "video",
    },
    {
      label: "Short cut on YouTube",
      url: "https://youtube.com/watch?v=lpcJWo2YjWY",
      kind: "short",
    },
    {
      label: "The Reef on Symbiothus",
      url: "https://symbiothus.vercel.app/films/the-reef",
      kind: "site",
    },
  ],
};
