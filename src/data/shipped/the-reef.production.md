# THE REEF — 60-second animated short

**Logline:** Three maintenance drones have serviced the same sunken ocean liner for sixty years. Today one of them finds a door that isn't on the chart.

**Runtime:** 60s · **Shots:** 8 × 7.5s · **Format:** 21:9, 4K
**Engine:** Seedance 2.0 — **hard 8s generation cap. Every shot below is written to 7.5s and states its duration explicitly.**

---

## HOW TO USE THIS DOCUMENT

1. Build all **11 elements** in Part 1. Upload each into Higgsfield using the **exact element name** given — lowercase, underscores, no spaces.
2. Once the elements exist under those names, paste any shot prompt from Part 2 directly. Higgsfield matches the `@tags` to your uploaded elements automatically.
3. Never paste a shot prompt before its elements exist — the model will invent them and they won't match the next shot.

**Element name list — create these exactly:**

```
hull
pip
meridian
wreck_exterior
wreck_corridor
grand_staircase
ballroom_reef
sealed_door
coral_piano
chandelier
cutting_torch
```

**Tag map — which elements each shot calls:**

| Shot | Tags used |
|---|---|
| 1 | `@hull` `@pip` `@meridian` `@wreck_exterior` |
| 2 | `@hull` `@pip` `@meridian` `@wreck_corridor` |
| 3 | `@hull` `@pip` `@meridian` `@grand_staircase` `@chandelier` |
| 4 | `@pip` `@meridian` `@wreck_corridor` `@sealed_door` |
| 5 | `@hull` `@wreck_corridor` `@sealed_door` `@cutting_torch` |
| 6 | `@ballroom_reef` `@coral_piano` |
| 7 | `@hull` `@pip` `@meridian` `@ballroom_reef` |
| 8 | `@hull` `@ballroom_reef` `@cutting_torch` |

> A tag only ever appears in a shot where that object is actually on screen. If you add a tag to a shot that doesn't contain it, the model will force it into frame.

---

## What was taken from the reference, and what was deliberately not

**Taken — the actual craft lessons:**
- **Three hard-contrasting silhouettes.** Slab / sphere / needle. You should be able to identify all three from a black outline at thumbnail size.
- **Deadpan banter as the engine.** Comedy from flat delivery and confident wrongness.
- **No mouths.** All three have light bars or indicator rings instead of faces. Dialogue is pure VO — **nothing can desync, because nothing is synced.**
- **Photoreal hard-surface CG.** Worn painted metal, real lens behaviour, physically plausible light.

**Deliberately avoided so this isn't a copy:**
- Underwater, not a dusty post-apocalyptic landscape — a completely different visual grammar.
- Not tourists. These three *work* here, with a job, a chart, and a sixty-year routine.
- Humans are not the joke.
- The ending turns **warm**, not bleak.

---

## The colour arc — the spine of the film

| Shots | Palette |
|---|---|
| 1–5 | Cold desaturated green-blue. The **only** warmth is the drones' amber work lamps. |
| 6 | **Explosive colour.** The only saturated shot in the film. |
| 7–8 | Colour held, but calm. Settled. |

Five shots of restraint buy one shot of colour. If a first-half batch comes back pretty, reject it — it will cost you shot 6.

---

# PART 1 — ASSET SHEET PROMPTS

Generate characters and props in **GPT Image 2** (best for reference-driven creation and editing). Generate environments in **Soul Cinema** in batches, then clean up the winner in GPT Image 2.

**Three rules that decide whether the whole film holds together:**
- Character sheets go on **flat neutral mid-grey**, evenly lit, no environment.
- **One head only per sheet.** If a sheet comes back with multiple faces or head variants, erase all but one before uploading — multi-face sheets cause identity drift by shot 5.
- Environments at a **3/4 angle, never flat head-on.** Head-on plates give camera moves nothing to work with.

---

## CHARACTERS

### `hull`

```
Character reference sheet of a heavy underwater structural welding drone, three views arranged side by side on a flat neutral mid-grey background: full body front view, full body rear view, and one close-up of the head and shoulders.

Slab silhouette: broad squared armored shoulders far wider than the hips, a thick blocky torso, short heavy legs, wide magnetic disc feet. Stands as tall as two humans stacked head to toe.

Worn industrial orange and grey paint, scratched through to bare steel along the shoulder edges, forearms and knees. Dense barnacle and marine growth crusted across both shoulder tops and the upper back. A single horizontal amber light bar set into the head where a face would be — no eyes, no mouth, no facial features of any kind. A heavy cutting torch mounted on the right forearm. Visible hydraulic lines at the elbows and hips.

Even flat studio lighting, no dramatic shadows, no environment, no background objects, no other characters.

Photoreal hard-surface industrial design, physically based rendering, high micro-detail on worn paint, corrosion and marine crust, 4K.
```

### `pip`

```
Character reference sheet of a small spherical underwater survey drone, three views arranged side by side on a flat neutral mid-grey background: front view, rear view, and one close-up of the lens assembly.

A smooth sphere the size of a human head. One large central glass lens with a visible mechanical iris taking up a third of the front surface. Four small thruster nozzles set at the cardinal points around the equator. A single small work lamp mounted beside the lens. A short retractable manipulator stub on the underside.

Bright yellow paint, scuffed and chipped down to grey primer around the equator and across the top. Fine scratch marks across the lens housing. No eyes, no mouth, no facial features of any kind — the lens is not an eye.

Even flat studio lighting, no dramatic shadows, no environment, no background objects, no other characters.

Photoreal hard-surface industrial design, physically based rendering, high micro-detail on chipped paint and glass, 4K.
```

### `meridian`

```
Character reference sheet of a tall thin underwater sensor drone, three views arranged side by side on a flat neutral mid-grey background: full front view, full rear view, and one close-up of the upper mast.

Needle silhouette: a single slender vertical mast on a three-legged tripod base with wide flat pads. Stands as tall as three humans stacked head to toe and is no wider than a human arm at any point.

Matte black composite, non-reflective. Coral and marine growth encrusting the lower third of the mast and all three tripod legs, thinning to clean black higher up. Three delicate multi-jointed manipulator arms folded flat against the mast at mid-height, each one thin and precise like a surgical instrument. A horizontal ring of twelve small green indicator lights set around the mast near the top where a face would be — no eyes, no mouth, no facial features of any kind.

Even flat studio lighting, no dramatic shadows, no environment, no background objects, no other characters.

Photoreal hard-surface industrial design, physically based rendering, high micro-detail on matte composite and coral encrustation, 4K.
```

---

## ENVIRONMENTS

### `wreck_exterior`

```
Wide three-quarter establishing view of a sunken 1960s ocean liner resting on a pale sand shelf at 60 metres depth, listing 12 degrees to port.

Hull plating furred with grey-green marine growth, funnels collapsed inward, deck rails draped in soft coral, cargo derricks fallen across the foredeck. Pale rippled sand around the hull. The stern receding into green haze.

Cold desaturated green-blue water. Broad defined sunlight shafts entering from directly above. Visibility 25 metres, haze density 45%. Suspended marine snow throughout. Deliberately low saturation across the entire frame — no bright colour anywhere.

Photoreal underwater cinematography, physically based rendering, high micro-detail on corroded plating and growth, 21:9, 4K.
```

### `wreck_corridor`

```
Three-quarter interior view down a flooded ocean liner passenger corridor.

Heavily silted floor, four doorways spaced down the left wall, peeling wood panelling swollen and rotted away from the bulkheads, a run of dead ceiling light fittings, loose cabling hanging from the ceiling void. The corridor recedes toward the right and disappears into total darkness at 12 metres.

Cold desaturated green-grey. Haze density 60%. Dense suspended silt catching what little light there is. Deliberately low saturation — no bright colour anywhere.

Photoreal underwater interior cinematography, physically based rendering, high micro-detail on rotted panelling and silt, 21:9, 4K.
```

### `grand_staircase`

```
Three-quarter view looking up a flooded grand staircase inside an ocean liner.

A sweeping curved staircase rising from lower left to upper right, its ornate rail thickly furred with marine growth. Drowned gilt plasterwork on the surrounding walls with all gold dulled to grey-green. A large crystal chandelier hanging askew on its cable at the top of the stairwell. A collapsed skylight far above admitting one weak cold shaft of surface light.

Deep blue-black at the foot of the stairs. Haze density 50%. Suspended particulate rising through the shaft. Deliberately low saturation — the only highlights are small cold specular points on the chandelier crystals.

Photoreal underwater interior cinematography, physically based rendering, volumetric light, high micro-detail on plasterwork and growth, 21:9, 4K.
```

### `ballroom_reef`

> **Build this one most carefully — it carries three shots and it is the entire payoff of the film. Batch it more than anything else.**

```
Wide three-quarter view of a sunken ocean liner's grand ballroom that has become a living coral reef.

A collapsed glass wall along the right side admits broad rippling shafts of surface light at 30 metres depth. Vivid orange, magenta and yellow hard and soft corals grown thickly over the hanging chandeliers, across the walls and ceiling mouldings, and completely engulfing a grand piano standing at the centre of the room. Deep purple anemones filling the shadowed coral heads. Thousands of small silver fish in dense coordinated schools moving through the space. Larger fish drifting slowly among the coral.

High saturation. Coral tissue glowing translucent where the surface light passes through it. Haze density 35%. Prismatic specular flashes off fish scales.

Photoreal underwater reef cinematography, physically based rendering, high micro-detail on coral tissue, anemones and fish scales, 21:9, 4K.
```

---

## PROPS

### `sealed_door`

```
Close three-quarter view of a heavy sealed steel bulkhead door set into rotted wood panelling in a flooded ship corridor.

Door edges thick with grey-brown marine crust, a wheel handle seized solid with corrosion, rivet lines still visible under the growth, a stencilled number plate corroded past reading. A faint continuous line of warm light bleeding through the seam along the door's base.

Hard raking lamp light from the left throwing the crusted texture into strong relief. Cold desaturated corridor around it. The warm seam light is the only warm element in the image and it stays small.

Photoreal underwater prop, physically based rendering, high micro-detail on corrosion and marine crust, 4K.
```

### `coral_piano`

```
Close three-quarter view of a grand piano completely overgrown with living coral, underwater.

The instrument's shape still clearly readable beneath thick vivid orange and magenta coral growth. The lid propped open and crusted over, the leg curves softened by encrustation, a few keys still visible in a gap in the growth. Small fish moving among the coral heads on the lid.

A shaft of rippling surface light landing across the top of the instrument. High saturation, coral tissue glowing translucent at the edges where light passes through.

Photoreal underwater prop, physically based rendering, high micro-detail on coral tissue and remaining lacquered wood, 4K.
```

### `chandelier`

```
Close three-quarter view of a large crystal chandelier hanging askew on its cable underwater inside a flooded ship stairwell.

Brass frame corroded to grey-green, arms bent out of true, several crystal drops missing from their hooks. The remaining crystals dulled and lightly furred with growth but still catching hard small specular points.

Deep blue-black surroundings. One small hard lamp raking across it from below. Deliberately low saturation — the crystal highlights are the only bright points in the image.

Photoreal underwater prop, physically based rendering, high micro-detail on corroded brass and clouded crystal, 4K.
```

### `cutting_torch`

```
Close view of a heavy industrial underwater cutting torch head mounted on an armored drone forearm, shown unlit on a flat neutral mid-grey background.

Thick insulated supply hose entering from below, a scorched and pitted nozzle, corroded brass fittings, a guard ring around the tip, worn industrial orange paint on the body scratched to bare steel at the edges.

Even flat studio lighting, no dramatic shadows, no environment, no background objects.

Photoreal hard-surface industrial design, physically based rendering, high micro-detail on scorching and corrosion, 4K.
```

---

# PART 2 — THE EIGHT SHOT PROMPTS

Every prompt is written to **7.5 seconds** and states its duration in OUTPUT SETTINGS. None exceeds the 8s cap.

Generate 4 batches per shot. Diagnose the specific flaw, refine, regenerate.

---

## SHOT 1 — 0:00 to 0:07.5

```
SCENE CONTEXT
Three maintenance drones descend through open ocean toward a sunken liner resting on a pale sand shelf 60 metres down. They enter camera-left and travel camera-right along the hull.

ACTIVE REFERENCES
@hull: heavy structural drone, slab silhouette, broad armored shoulders, worn orange-and-grey paint, barnacle growth across both shoulders, a single horizontal amber light bar for a face, as tall as two humans stacked head to toe. 100% matches the reference.
@pip: small spherical survey drone the size of a human head, one large lens, four thrusters, scuffed yellow paint. 100% matches the reference.
@meridian: tall thin matte-black sensor mast on a tripod base, coral-encrusted lower third, three folded manipulator arms, a ring of green indicator lights, as tall as three humans stacked head to toe and no wider than a human arm. 100% matches the reference.
@wreck_exterior: sunken ocean liner on a pale sand shelf, listing 12 degrees to port, hull furred with marine growth. 100% matches the reference.

LOCATION MAP
Foreground: suspended marine snow drifting across the whole frame. Midground: the three drones descending in formation, HULL leading and lowest, PIP orbiting around him, MERIDIAN trailing above and behind. Background: the liner's hull filling the lower half of frame, deck lines receding camera-right into green haze at 25 metres. Camera above and outside the group. Sunlight enters from directly above as broad shafts.

FIRST FRAME / BLOCKING
All three drones already descending. HULL on the left vertical third and lowest in frame, PIP mid-frame and higher, MERIDIAN on the right vertical third and highest. The hull across the lower third. Diagonal composition running upper-left to lower-right.

FORMAT MODE
One continuous shot, the camera does not cut on its own.

OPTICS
Extreme wide shot, 84 degrees FOV, rectilinear, architectural scale. Deep focus holding all three drones and the hull, soft natural falloff into the haze.

CAMERA
Operator outside the group and above, craning down at 2 km/h and easing camera-right to follow the descent. Focus deep. Wide tonal latitude with gentle roll-off on the surface shafts.

ACTION
0 to 4s — the three drones descend at 3 km/h, HULL sinking steadily with no thruster movement, PIP darting in a loose orbit around the group at 8 km/h, MERIDIAN drifting down slowly and staying vertical.
4 to 7.5s — HULL's magnetic feet contact the hull plating and he settles, a silt cloud blooming outward from the impact and hanging. The other two continue down toward him.

PHYSICS
Everything is buoyant and damped. Nothing falls fast, nothing stops sharply. Marine snow drifts on a slow lateral current at 1 km/h. Silt lifted from the hull blooms outward and hangs rather than settling. MERIDIAN's coral encrustation stays rigid while his thin frame sways slightly.

LIGHTING
Sunlight from directly above entering as broad defined shafts through the water column, one and a half stops hotter than the hull below. The drones' amber work lamps as small warm points against the cold field. Deep blue-green shadow filling the hull's lee side. Haze density 45% at 25 metres. White balance 8500K.

COLOR GRADE
Water as cold desaturated green-blue holding almost no saturation anywhere in frame. Hull plating a dead grey-green furred with growth. The three amber work lamps and HULL's orange paint as the only warm notes, small and isolated.

AUDIO
Deep pressurised ocean rumble. Slow mechanical servo whir. Distant hull groan.

STYLE
Photoreal hard-surface 3D animation, physically based rendering, high micro-detail on worn painted metal and marine growth, fine grain, filmic highlight roll-off.

OUTPUT SETTINGS
Total duration 7.5 seconds. 4K, 21:9 anamorphic, real-time speed throughout.

POSITIVE LOCKS
HULL leads and stays lowest, PIP orbits the group, MERIDIAN trails and stays highest. The group travels camera-right. Sunlight stays directly overhead. Haze holds at 45% at 25 metres. Saturation stays low across the entire frame.
```

---

## SHOT 2 — 0:07.5 to 0:15

```
SCENE CONTEXT
Inside the wreck. The three drones move down a flooded interior corridor, travelling camera-left to camera-right. Their work lamps are the only light.

ACTIVE REFERENCES
@hull: heavy structural drone, slab silhouette, worn orange-and-grey paint, barnacled shoulders, horizontal amber light bar, as tall as two humans stacked head to toe. 100% matches the reference.
@pip: small spherical yellow survey drone the size of a human head, one large lens. 100% matches the reference.
@meridian: tall thin matte-black coral-encrusted sensor mast, ring of green indicator lights, as tall as three humans stacked head to toe. 100% matches the reference.
@wreck_corridor: flooded interior passage, silted floor, doorways down one side, peeling rotted panelling. 100% matches the reference.

LOCATION MAP
Foreground: a doorframe edge, soft, along the left frame edge. Midground: HULL walking the corridor floor at frame centre-left, PIP hovering ahead of him, MERIDIAN behind on the right. Background: the corridor receding camera-right into total darkness at 12 metres. Camera low in the corridor ahead of the group, retreating. HULL's chest lamp is the key light.

FIRST FRAME / BLOCKING
HULL already walking, silt rising around his feet. HULL on the centre vertical, PIP on the left third and higher, MERIDIAN on the right third and tall enough that his upper mast is cropped by the frame. Corridor vanishing point on the right third.

FORMAT MODE
One continuous shot, the camera does not cut on its own.

OPTICS
Medium wide shot, 63 degrees FOV, observational, rectilinear. Focus on HULL, the corridor behind falling into black.

CAMERA
Operator low in the corridor at knee height ahead of the group, retreating camera-right at 3 km/h to hold the group's size constant. Focus rides HULL's chest plate.

ACTION
0 to 4s — HULL walks at 3 km/h, each magnetic footfall lifting a slow silt bloom that hangs behind him. PIP darts ahead into a doorway, lens swivelling, and darts back.
4 to 7.5s — MERIDIAN extends one thin manipulator arm to touch the corridor wall, holds contact for two seconds, and retracts it. His green indicator ring pulses once.

PHYSICS
Silt lifts in slow blooms at every footfall and stays suspended in the lamp beams. Loose panelling sways on the current. PIP's darting movements have real acceleration and drift-out rather than instant stops. Marine snow drifts through every beam.

LIGHTING
HULL's chest lamp as a hard directional key throwing a cone forward and camera-right, made fully visible by the suspended silt. PIP's smaller lamp as a moving secondary. MERIDIAN's green indicator ring as a faint cold accent. Everything outside the beams falls to near black. Haze density 60% inside the corridor. White balance 5600K on the lamps.

COLOR GRADE
Corridor as drab silt-grey and rotted brown, almost fully desaturated. The lamp beams as solid warm amber cones cutting through the particulate. HULL's orange paint the only colour with any saturation, and it is faded.

AUDIO
Muffled interior water pressure. Magnetic footfalls clunking through the hull. Servo whir. Distant metal groan.

STYLE
Photoreal hard-surface 3D animation, physically based rendering, heavy volumetric light, fine grain, filmic roll-off with deep held blacks.

OUTPUT SETTINGS
Total duration 7.5 seconds. 4K, 21:9 anamorphic, real-time speed throughout.

POSITIVE LOCKS
The group travels camera-right down the corridor. HULL walks on the floor, PIP hovers ahead, MERIDIAN trails behind. HULL's chest lamp stays the key light. The corridor stays dark beyond 12 metres. Saturation stays low.
```

---

## SHOT 3 — 0:15 to 0:22.5

```
SCENE CONTEXT
The drones enter the wreck's flooded grand staircase. PIP flies up into the open volume toward the chandelier while the other two stay below.

ACTIVE REFERENCES
@pip: small spherical yellow survey drone the size of a human head, one large lens, four thrusters. 100% matches the reference.
@hull: heavy structural drone, slab silhouette, worn orange paint, horizontal amber light bar. 100% matches the reference.
@meridian: tall thin matte-black coral-encrusted sensor mast on a tripod base, ring of green indicator lights. 100% matches the reference.
@grand_staircase: flooded grand staircase, sweeping curved stairs, ornate rail furred with growth, drowned gilt plasterwork, collapsed skylight above. 100% matches the reference.
@chandelier: large crystal chandelier hanging askew on its cable, corroded grey-green brass frame, clouded crystals still catching hard specular points. 100% matches the reference.

LOCATION MAP
Foreground: the ornate stair rail crossing the lower frame, furred with growth, soft. Midground: the staircase curving up camera-right, PIP rising through the open volume. Background: the chandelier hanging askew at the top of the stairwell, and the collapsed skylight above it admitting one weak shaft of surface light. HULL and MERIDIAN small at the bottom of frame. Camera low at the stair foot, tilting up.

FIRST FRAME / BLOCKING
PIP already rising on the left third, the chandelier on the upper right third, HULL and MERIDIAN small in the lower right. Strong vertical composition, the staircase sweeping from lower-left to upper-right.

FORMAT MODE
One continuous shot, the camera does not cut on its own.

OPTICS
Wide shot, 84 degrees FOV, architectural, rectilinear, emphasising the height of the stairwell. Deep focus.

CAMERA
Operator low at the foot of the stairs, craning up at 2 km/h following PIP's rise. Focus deep, holding both PIP and the chandelier.

ACTION
0 to 4s — PIP rises through the stairwell at 6 km/h, his lens rotating to track the chandelier, his lamp sweeping across the ornate ceiling as he climbs.
4 to 7.5s — PIP arrives level with the chandelier and stops. The chandelier rotates slowly on its cable at 1 km/h, its crystals catching PIP's lamp and throwing small moving points of light across the walls.

PHYSICS
The chandelier swings on a long slow pendulum with real mass and heavy water damping, its crystals rotating on their own individual axes. PIP decelerates with drift-out, never stopping instantly. Marine snow rises through the shaft on a slow thermal.

LIGHTING
PIP's small lamp as a hard moving key raking across the ornate plasterwork. One weak cold shaft from the collapsed skylight above, half a stop under PIP's lamp, marking the top of the stairwell. Everything below falls to deep blue-black. Haze density 50%. White balance 7000K.

COLOR GRADE
Plasterwork and gilt as drowned grey-green with all gold dulled to nothing. The chandelier crystals as small cold specular points, the only sharp highlights in frame. Deliberately drab overall.

AUDIO
Hollow reverberant water tone. Chandelier crystals chiming faintly against each other. Thruster pulses.

STYLE
Photoreal hard-surface 3D animation, physically based rendering, volumetric light through particulate, fine grain, filmic roll-off with deep blacks.

OUTPUT SETTINGS
Total duration 7.5 seconds. 4K, 21:9 anamorphic, real-time speed throughout.

POSITIVE LOCKS
PIP rises from the lower left toward the upper right. HULL and MERIDIAN stay small at the bottom of frame. The chandelier stays hanging askew and rotating slowly on its cable. The only surface light is the weak shaft from the collapsed skylight above. Saturation stays low.
```

---

## SHOT 4 — 0:22.5 to 0:30

```
SCENE CONTEXT
Back in a corridor. PIP has stopped in front of a sealed steel door set into the panelled wall. MERIDIAN approaches from camera-right to examine it.

ACTIVE REFERENCES
@pip: small spherical yellow survey drone the size of a human head, one large lens with a visible mechanical iris. 100% matches the reference.
@meridian: tall thin matte-black coral-encrusted sensor mast on a tripod base, three delicate manipulator arms, ring of green indicator lights. 100% matches the reference.
@wreck_corridor: flooded interior passage, silted floor, rotted panelling. 100% matches the reference.
@sealed_door: heavy sealed steel bulkhead door, edges thick with marine crust, seized wheel handle, a faint continuous line of warm light bleeding through the seam along its base. 100% matches the reference.

LOCATION MAP
Foreground: silt drifting across the lower frame. Midground: the sealed door filling the centre and right of frame, PIP hovering close to it on the left. MERIDIAN entering from camera-right. Background: dark corridor. Camera square to the door. PIP's lamp is the key light.

FIRST FRAME / BLOCKING
PIP already hovering 30cm from the door, lens fixed on the seam. Door occupying the right two thirds, PIP on the left vertical third. The warm light line along the door's base visible but faint.

FORMAT MODE
One continuous shot, the camera does not cut on its own.

OPTICS
Medium shot, 47 degrees FOV, neutral perspective, rectilinear. Focus on the door seam, PIP held just inside the focal plane.

CAMERA
Operator square to the door at PIP's height, pushing in slowly at 0.5 km/h. Focus locked on the base seam where the light bleeds through.

ACTION
0 to 4s — PIP holds position, his lens iris visibly contracting and expanding twice as he studies the seam. His lamp plays across the door's crusted surface.
4 to 7.5s — MERIDIAN enters from camera-right, lowers his mast to bring his indicator ring level with the door, and extends one thin manipulator arm toward the seam. The arm stops just short of contact. His green ring pulses rapidly, then stops.

PHYSICS
Silt disturbed by MERIDIAN's arrival blooms and hangs. The manipulator arm moves with slow precise damping through water resistance. PIP holds station with small constant thruster corrections and slight drift.

LIGHTING
PIP's lamp as the hard key from camera-left, raking the door's crusted texture into strong relief. A thin continuous line of soft warm light bleeding through the door's base seam, half a stop under the lamp, the only other source. MERIDIAN's green ring as a cold accent. Haze density 55%. White balance 5600K.

COLOR GRADE
Door steel as corroded grey under hard raking light, growth reading as dull brown crust. The seam light as a warm amber line — the warmest and most saturated thing in the film so far, and still small.

AUDIO
Water pressure hum. Iris servo ticks. A single low resonant tone from behind the door.

STYLE
Photoreal hard-surface 3D animation, physically based rendering, hard raking light on heavy texture, fine grain, filmic roll-off.

OUTPUT SETTINGS
Total duration 7.5 seconds. 4K, 21:9 anamorphic, real-time speed throughout.

POSITIVE LOCKS
PIP stays camera-left of the door and MERIDIAN enters from camera-right. The warm light line at the door's base stays continuous and visible for the whole shot. PIP's lamp stays the key from camera-left. Saturation stays low everywhere except the seam line.
```

---

## SHOT 5 — 0:30 to 0:37.5

```
SCENE CONTEXT
HULL cuts the sealed door open with an underwater cutting torch. The light behind the door grows as the cut advances.

ACTIVE REFERENCES
@hull: heavy structural drone, slab silhouette, broad armored shoulders, worn orange-and-grey paint, barnacled shoulders, horizontal amber light bar, as tall as two humans stacked head to toe. 100% matches the reference.
@cutting_torch: heavy industrial underwater cutting torch mounted on his right forearm, thick insulated hose, scorched pitted nozzle, corroded brass fittings. 100% matches the reference.
@sealed_door: heavy sealed steel bulkhead door, edges thick with marine crust, seized wheel handle. 100% matches the reference.
@wreck_corridor: flooded interior passage, silted floor, rotted panelling. 100% matches the reference.

LOCATION MAP
Foreground: dense silt and rising gas bubbles crossing the lower frame. Midground: HULL in three-quarter profile facing camera-right, braced against the door, torch head against the steel. Background: the door itself, the cut line advancing and glowing. Camera camera-left of HULL and slightly behind his shoulder. The torch is the key light.

FIRST FRAME / BLOCKING
HULL already braced, torch already lit, the cut already begun at the door's lower left. HULL occupying the left two thirds in near-silhouette, the glowing cut line on the right third.

FORMAT MODE
One continuous shot, the camera does not cut on its own.

OPTICS
Medium shot, 47 degrees FOV, neutral perspective. Focus on the torch head and cut line, HULL's silhouette held just soft.

CAMERA
Operator camera-left and slightly behind HULL's shoulder, holding position, drifting up 20cm across the shot. Focus locked on the advancing cut.

ACTION
0 to 4s — HULL draws the torch upward along the door at 0.4 km/h, the cut line trailing white-hot behind it, a dense column of gas bubbles boiling off the cut and racing upward.
4 to 7.5s — the cut reaches the top corner. HULL kills the torch. In the sudden darkness the light from behind the door is now a broad glow along the full cut, far brighter than before, throwing HULL into hard silhouette.

PHYSICS
Gas bubbles boil off the cut and accelerate upward, expanding as they rise. The cut edge glows and cools through orange to dull red within two seconds of the torch passing. Silt is driven violently away from the work and then drifts back. HULL's mass keeps him completely stable against the door.

LIGHTING
The cutting torch as an intense white-hot point key, three stops over everything else, throwing hard moving shadows down the corridor. When it dies, the light from behind the door takes over as a broad soft warm source, one stop over ambient, rimming HULL's shoulders and barnacles from behind.

COLOR GRADE
Torch light as blinding white-blue with an orange cooling trail. HULL as a near-black silhouette with a hard warm rim. The emerging light from behind the door as warm gold — the first real colour in the film, arriving as a promise rather than a payoff.

AUDIO
Fierce hiss and crackle of the underwater torch. Boiling bubbles. Then an abrupt cut to near silence with only the low resonant tone from behind the door.

STYLE
Photoreal hard-surface 3D animation, physically based rendering, extreme dynamic range between torch and ambient, fine grain, filmic roll-off with deep held blacks.

OUTPUT SETTINGS
Total duration 7.5 seconds. 4K, 21:9 anamorphic, real-time speed throughout.

POSITIVE LOCKS
HULL stays camera-left in silhouette and the door stays camera-right. The cut advances upward along the door. The torch dies at 4 seconds and the light from behind the door becomes the key for the rest of the shot. Bubbles rise continuously throughout.
```

---

## SHOT 6 — 0:37.5 to 0:45 · **THE REVEAL**

```
SCENE CONTEXT
The door falls away and the ballroom beyond is revealed: an aquarium wall failed here decades ago and the entire room is now a living coral reef, dense with fish.

ACTIVE REFERENCES
@ballroom_reef: the wreck's former grand ballroom, now a full living coral reef, vivid orange and magenta coral over the hanging chandeliers and walls, deep purple anemones, thousands of small silver fish in dense schools, a collapsed glass wall along one side admitting rippling surface light. 100% matches the reference.
@coral_piano: a grand piano completely overgrown with vivid living coral, its shape still readable beneath the growth, lid propped and crusted. 100% matches the reference.

LOCATION MAP
Foreground: the cut door edge and drifting silt framing the lower left corner in hard dark silhouette. Midground: the ballroom opening out, the coral piano at frame centre, dense fish schools crossing left to right. Background: the far end of the ballroom, chandeliers furred with coral, and the collapsed glass wall admitting broad shafts of surface light at 30 metres. Camera in the cut doorway looking in.

FIRST FRAME / BLOCKING
The frame opens on the dark door edge in the left quarter and the full reef occupying the remaining three quarters. The coral piano on the centre vertical with a shaft of surface light landing on it. Fish schools already streaming across frame.

FORMAT MODE
One continuous shot, the camera does not cut on its own.

OPTICS
Wide shot, 84 degrees FOV, architectural, rectilinear, opening the space as fully as possible. Deep focus from the doorway edge to the far wall.

CAMERA
Operator in the cut doorway, pushing forward into the room at 1.5 km/h, moving from darkness into light across the whole shot. Focus deep.

ACTION
0 to 3s — the camera crosses the threshold and the room opens out. A dense school of small silver fish sweeps across frame from camera-left to camera-right at 12 km/h, splitting around the chandeliers.
3 to 7.5s — the push continues toward the coral piano. Larger fish move slowly among the coral heads. A shaft of surface light travels slowly across the piano's coral crust as the surface swell above shifts.

PHYSICS
Fish schools move as true coordinated flocks, splitting and rejoining around obstacles with no collisions. Soft corals and anemones sway on the current at 1 km/h. Light shafts ripple and shift continuously as the surface moves. Suspended particulate catches the light everywhere.

LIGHTING
Broad shafts of surface light entering through the collapsed glass wall at camera-right, two stops hotter than the corridor behind, rippling and moving continuously. Coral glowing translucent under the light. The dark corridor behind the camera reading as pure black by contrast. Haze density 35% at 30 metres. White balance 7000K.

COLOR GRADE
This is the only saturated shot in the film and it goes as far as it can. Coral as vivid orange, magenta and yellow living tissue lit from above and glowing translucent at the edges. Fish scales throwing hard prismatic specular flashes. Anemones deep purple in the shadowed coral heads.

AUDIO
The low resonant tone resolving into a broad living reef ambience: clicking, crackling, distant whalesong. A sudden bloom of space and reverb after five shots of enclosure.

STYLE
Photoreal 3D animation, physically based rendering, high micro-detail on coral tissue and fish scales, fine grain, filmic highlight roll-off with wide latitude.

OUTPUT SETTINGS
Total duration 7.5 seconds. 4K, 21:9 anamorphic, real-time speed throughout.

POSITIVE LOCKS
The camera moves forward from the dark doorway into the lit room across the whole shot. Fish schools travel camera-left to camera-right. Surface light enters from camera-right through the collapsed glass wall. The coral piano stays at frame centre. Saturation stays high for the entire shot.
```

---

## SHOT 7 — 0:45 to 0:52.5

```
SCENE CONTEXT
A wide from inside the reef looking back at the three drones standing small in the cut doorway, fish streaming past them.

ACTIVE REFERENCES
@hull: heavy structural drone, slab silhouette, worn orange-and-grey paint, barnacled shoulders, horizontal amber light bar, as tall as two humans stacked head to toe. 100% matches the reference.
@pip: small spherical yellow survey drone the size of a human head, one large lens. 100% matches the reference.
@meridian: tall thin matte-black coral-encrusted sensor mast, ring of green indicator lights, as tall as three humans stacked head to toe. 100% matches the reference.
@ballroom_reef: coral-covered ballroom, vivid orange and magenta coral over the chandeliers, dense fish schools, collapsed glass wall admitting rippling surface light. 100% matches the reference.

LOCATION MAP
Foreground: a large coral head in the lower left, soft, and fish crossing frame in both directions. Midground: the three drones standing together in the cut doorway at frame centre-right, small against the room, HULL camera-left of the group, PIP hovering between, MERIDIAN camera-right and tallest. Background: the ballroom's coral ceiling above them. Camera deep inside the reef looking back toward the door. Surface light from camera-left.

FIRST FRAME / BLOCKING
All three drones already standing still in the doorway, none of them moving. The group on the right vertical third, deliberately small in frame, the coral head on the left third. Composition emphasises how little space they occupy.

FORMAT MODE
One continuous shot, the camera does not cut on its own.

OPTICS
Wide shot, 63 degrees FOV, observational, rectilinear. Focus on the drone group, foreground coral soft.

CAMERA
Operator deep inside the reef, holding still, drifting up very slowly at 0.5 km/h. Focus locked on the three drones.

ACTION
0 to 4s — the three drones stand completely still. A school of fish streams between the camera and the group, briefly obscuring them, then clears.
4 to 7.5s — PIP drifts forward 40cm into the room, then stops. HULL and MERIDIAN do not follow. MERIDIAN's green indicator ring pulses once, slowly.

PERFORMANCE
None of the three has a face, and none of them moves. All the emotion is in stillness and spacing: three machines holding position while a living room moves around them. PIP's small forward drift is the only action in the shot and it reads as wonder, not as a decision.

PHYSICS
Fish schools move as coordinated flocks and part cleanly around the camera. Corals sway on the current. PIP's drift has slow acceleration and a long drift-out. The two standing drones are perfectly stable.

LIGHTING
Broad rippling surface shafts from camera-left, two stops over the doorway behind the drones, so the group reads as three dark silhouettes against a lit room. Their small work lamps still burning as warm points, now visually irrelevant against the daylight. Haze density 35%. White balance 7000K.

COLOR GRADE
Reef saturation held high. The three drones as desaturated grey-orange industrial shapes standing in the middle of it, visibly not belonging to the palette around them.

AUDIO
Full reef ambience, clicking and crackling. Fish movement. The drones' servo whir now very small in the mix.

STYLE
Photoreal 3D animation, physically based rendering, high micro-detail, fine grain, filmic roll-off.

OUTPUT SETTINGS
Total duration 7.5 seconds. 4K, 21:9 anamorphic, real-time speed throughout.

POSITIVE LOCKS
HULL stays camera-left of the group, PIP between, MERIDIAN camera-right and tallest. The three stay small in frame. Surface light stays camera-left. Only PIP moves, and only after 4 seconds. Reef saturation stays high.
```

---

## SHOT 8 — 0:52.5 to 1:00

```
SCENE CONTEXT
Close on HULL inside the reef. He ignites his cutting torch out of pure habit, looks at the room, and shuts it off again. Nothing gets repaired.

ACTIVE REFERENCES
@hull: heavy structural drone, slab silhouette, broad armored shoulders, worn orange-and-grey paint, barnacle growth across both shoulders, a single horizontal amber light bar for a face. 100% matches the reference.
@cutting_torch: heavy industrial underwater cutting torch mounted on his right forearm, thick insulated hose, scorched pitted nozzle. 100% matches the reference.
@ballroom_reef: coral-covered ballroom, vivid coral, dense fish schools, rippling surface light. 100% matches the reference.

LOCATION MAP
Foreground: fish crossing frame close to camera, soft. Midground: HULL's head and shoulders filling the left two thirds, in three-quarter profile facing camera-right, torch raised at chest level. Background: the reef, heavily defocused into a field of moving colour and light. Camera close on HULL's shoulder line. Surface light from camera-right.

FIRST FRAME / BLOCKING
HULL already still, torch raised but unlit, his horizontal light bar facing camera-right into the room. HULL on the left vertical third, the defocused reef filling the right.

FORMAT MODE
One continuous shot, the camera does not cut on its own.

OPTICS
Close-up, 29 degrees FOV, portrait compression. Shallow focus locked on HULL's light bar and shoulder barnacles, the reef behind dissolving into soft coloured light.

CAMERA
Operator close on HULL's shoulder on the shadow side, completely static for the whole shot. Focus locked on his light bar.

ACTION
0 to 2s — the torch ignites, a hard white point flaring at the bottom of frame, throwing sharp light up across HULL's chest and jaw plating.
2 to 4s — HULL holds it. His light bar does not move.
4 to 7.5s — the torch goes out. HULL lowers it out of frame. He stays completely still, facing the room, as fish drift past between him and the camera. Hold on stillness to the end.

PERFORMANCE
HULL has no face and never moves his head. Everything reads through light travelling across him: the torch flare arriving hard and leaving, the soft rippling reef light returning to fill the frame afterwards. The stillness after the torch dies runs long enough to feel deliberate.

PHYSICS
The torch flare drives bubbles upward hard, and they thin out and stop within two seconds of it going out. Barnacles and growth on his shoulders stay rigid. Fish pass with true flocking behaviour and never contact him.

LIGHTING
0 to 4s — the torch as a hard low white key three stops over everything, uplighting HULL's chest and jaw and killing the reef behind into black. 4 to 7.5s — the torch gone, rippling surface light from camera-right returns as the only source, soft and moving, half a stop over his paint. White balance 7000K after the torch dies.

COLOR GRADE
During the flare, HULL reads as harsh white-blue industrial metal and the reef vanishes. After it dies, warm reef colour floods back in behind him and his faded orange paint finally sits in a palette that matches it.

AUDIO
Fierce torch hiss for two seconds, then an abrupt cut to full reef ambience — clicking, crackling, distant whalesong — running clean to the end.

STYLE
Photoreal hard-surface 3D animation, physically based rendering, high micro-detail on worn paint and barnacle growth, fine grain, filmic roll-off with wide latitude.

OUTPUT SETTINGS
Total duration 7.5 seconds. 4K, 21:9 anamorphic, real-time speed throughout.

POSITIVE LOCKS
HULL stays camera-left and completely still, with no head movement, for the entire shot. The torch ignites at 0 seconds and goes out at 4 seconds. Surface light stays camera-right. After the torch dies, reef colour and saturation return fully behind him.
```

---

# PART 3 — CAST, SCRIPT, POST

## Script

| # | Time | Beat | Dialogue |
|---|------|------|----------|
| 1 | 0:00–0:07.5 | Descent. The wreck below in godrays. | **PIP:** "Sixty years on the same boat." · **HULL:** "Ship." · **PIP:** "Sixty years and you still correct me." |
| 2 | 0:07.5–0:15 | Interior corridor. Silt. Work lamps. | **MERIDIAN:** "Compartment fourteen. Structural integrity, ninety-one percent." · **HULL:** "It was ninety-one last year." · **MERIDIAN:** "It was." |
| 3 | 0:15–0:22.5 | The grand staircase. Chandelier drifting. | **PIP:** "What did they use this for?" · **MERIDIAN:** "They descended slowly. So that others could watch them descending." |
| 4 | 0:22.5–0:30 | PIP finds a sealed door that isn't mapped. | **PIP:** "Meridian. This one isn't on the chart." · **MERIDIAN:** "Everything is on the chart." · **PIP:** "Then what's this?" |
| 5 | 0:30–0:37.5 | HULL cuts the door. Light spills through the seam. | **HULL:** "Stand back." |
| 6 | 0:37.5–0:45 | **THE REVEAL.** The ballroom is a living reef. | **MERIDIAN:** "…That is not on the chart." |
| 7 | 0:45–0:52.5 | Wide. Three small drones in the doorway. | **PIP:** "How long?" · **MERIDIAN:** "Sixty years." · **HULL:** "We kept the walls up." |
| 8 | 0:52.5–1:00 | HULL's torch ignites, then goes out. | **PIP:** "Can we come back tomorrow?" · **HULL:** "We come back every day." · **PIP:** "I know. I just like asking." |

All dialogue is voiceover. None of the three characters has a mouth — no lip sync exists to break.

## Cast

| | **HULL** | **PIP** | **MERIDIAN** |
|---|---|---|---|
| **Silhouette** | Slab | Sphere | Needle |
| **Scale** | Two humans stacked head to toe | A human head | Three humans stacked head to toe, no wider than an arm |
| **Character** | Slow, literal, does the actual work. Corrects vocabulary. | Fast, enthusiastic, asks the questions nobody else asks anymore. | Ancient, pedantic, speaks in specifications. Dry. |

## Voices — one locked, two need auditioning

| Role | Recommendation | Status |
|---|---|---|
| **PIP** | **Little Dude II — Cartoon Character** `fBD19tfE58bkETeiwUoC` · `stability 0.4, style 0.35, speed 1.05` | Possibly too cartoony for photoreal. Audition against **Sandra Squirrel — Quirky Explorer** `iwP1PxYYSTdHA1qXlwFe` (better tonal match, but German-primary — verify English first). |
| **HULL** | **Chris — Deep, Calm & smooth** `1koyuv6vFWwrfTeqpDzq` · `stability 0.75, style 0.05, speed 0.85` | **Conflicts with IMPACT.** |
| **MERIDIAN** | **Matthew Schmitz — Warm Mountain Man** `Q4oILuo4P8VeXtE6FMLI` · `stability 0.6, style 0.15, speed 0.8` | **Conflicts with IMPACT.** |

> **Decide before recording.** Chris and Matthew are already assigned to IMPACT. Reusing the same pair across two films on one channel will be noticeable. Recommendation: keep them for IMPACT, audition fresh voices here. Library search takes **short two-or-three-word queries** — long descriptive ones return nothing.

## Post

**Audio build**
1. Record all 16 lines individually. Lay VO first, cut picture to the reading.
2. **The sound design has one job: shot 6.** Shots 1–5 are enclosed, muffled, pressurised, narrow. At the cut to shot 6 the reverb and stereo width open up hard. That acoustic bloom does as much work as the colour.
3. No music until shot 6. Something small and warm enters there and carries to the end.
4. Master to -14 LUFS.

**Assembly**
```bash
ffmpeg -f concat -safe 0 -i shots.txt -c:v libx264 -crf 16 -pix_fmt yuv420p reef_picture.mp4
```

**Titles**
- **Title:** THE REEF — a 60 second animated short
- **Description hook:** "Three maintenance drones have serviced the same wreck for sixty years. Today one of them finds a door that isn't on the chart."
- **Thumbnail:** pull a frame from shot 7 — three small industrial silhouettes in a doorway against a wall of colour. That composition is the whole film in one image.

---

## Known risks and their fixes

| Risk | Fix |
|---|---|
| Shots 1–5 come out too pretty and the reveal doesn't land | Every first-half prompt ends with "saturation stays low." Enforce it. Reject good-looking colourful batches — they cost you shot 6. |
| The three drones drift into looking similar | Silhouettes are slab, sphere and needle, and each one's scale is stated by human-height comparison in every prompt. If drift appears, regenerate the sheet with one clean head angle on grey. |
| Fish schools clip through geometry or each other | Prompts specify true coordinated flocking that splits and rejoins with no collisions. Batch shot 6 harder than anything else. |
| Underwater reads as murky brown soup | Haze density and visibility are stated per shot in metres and percent. Lamp beams need particulate to be visible at all, so keep it — but hold the stated numbers. |
| Shot 8's stillness reads as a frozen frame | Fish keep drifting past between HULL and camera for the whole hold. That motion proves time is still running. |
| A generation exceeds the 8s cap | Every prompt states "Total duration 7.5 seconds" in OUTPUT SETTINGS and every ACTION block is timed to end at 7.5s. |
