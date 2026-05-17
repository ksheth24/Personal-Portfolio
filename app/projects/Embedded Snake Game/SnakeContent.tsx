"use client";

export default function SnakeContent() {
  const features = [
    {
      title: "Doubly linked list snake body",
      desc: "Represented the snake as a custom DLinkedList of SnakeItem nodes, enabling O(1) head insertion and tail deletion on every move tick.",
    },
    {
      title: "Hardware input controls",
      desc: "Read directional movement and game actions from a 5-way navigation switch and three pushbuttons wired with pull-up resistors.",
    },
    {
      title: "uLCD graphics rendering",
      desc: "Rendered the game on a 128×128 uLCD display using a 16×16 grid and BLIT calls to update game objects efficiently.",
    },
    {
      title: "Dynamic item system",
      desc: "Implemented multiple item types including fruit, boost, poison, clear, speed, and end-game objects with collision handling.",
    },
  ];

  const hardware = [
    {
      label: "Display",
      value: "uLCD-144-G2",
      detail: "SPI — tx: p9, rx: p10, reset: p11",
    },
    {
      label: "Navigation",
      value: "5-way Nav Switch",
      detail: "p12, p13, p14, p15, p16",
    },
    {
      label: "Buttons",
      value: "3× Pushbutton",
      detail: "p21, p22, p23 — PullUp, active-LOW",
    },
    {
      label: "Audio",
      value: "PWM Speaker",
      detail: "PwmOut on p25 + DAC on p18",
    },
  ];

  const modules = [
    {
      file: "main.cpp",
      desc: "Game loop, start screen, difficulty selection, player name, collision checks, score display, and pause logic.",
    },
    {
      file: "snake.cpp / snake.h",
      desc: "Snake struct, DLL-backed body, movement, growth, drawing, wall collision, self-collision, and direction reversal.",
    },
    {
      file: "hardware.cpp / hardware.h",
      desc: "Hardware initialization for uLCD, navigation switch, pushbuttons, PWM speaker, and serial communication.",
    },
    {
      file: "items.cpp / items.h",
      desc: "Item lists, random placement, item-to-item collision detection, item-to-snake collision detection, and item replacement.",
    },
    {
      file: "doubly_linked_list.cpp",
      desc: "Generic doubly linked list implementation with insertion, deletion, splitting, and list destruction utilities.",
    },
    {
      file: "graphics.cpp / graphics.h",
      desc: "Draw functions for the snake head, body states, and all item types using uLCD graphics operations.",
    },
  ];

  return (
    <div className="space-y-14">
      {/* HERO IMAGE */}
      <img
        src="/SnakeGame/homescreennew.png"
        className="w-full max-w-5xl mx-auto rounded-xl border border-gray-200"
        alt="Snake game running on uLCD display"
      />

      {/* TITLE */}
      <div>
        <div className="flex flex-row space-x-5 items-center">
          <h2 className="text-3xl font-bold font-montserrat">
            Snake on Embedded Processor
          </h2>

          <a
            href="https://github.com/ksheth24/Snake-On-Embedded-Processor-mbed-"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/GitHub.png"
              className="w-10 hover:scale-110 transition"
              alt="GitHub logo"
            />
          </a>
        </div>

        <p className="mt-3 text-gray-600 text-lg leading-8">
          A fully playable Snake game built in <strong>C++</strong> and deployed
          directly onto an <strong>NXP LPC1768 ARM Cortex-M3</strong> microcontroller
          using the <strong>Mbed OS</strong> framework. The project combines hardware
          input handling, SPI display rendering, PWM audio, real-time game logic, and
          custom data structures under tight embedded memory constraints.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {[
            "C++",
            "Embedded Systems",
            "Mbed OS",
            "ARM Cortex-M3",
            "SPI",
            "GPIO",
            "PWM",
            "Doubly Linked List",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* KEY FEATURES */}
      <div>
        <h3 className="mb-5 text-2xl font-bold font-poppins">
          Key Features ⭐
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition bg-white"
            >
              <h4 className="text-lg font-semibold">{f.title}</h4>
              <p className="mt-1 text-gray-600 leading-7">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* HARDWARE SETUP */}
      <div>
        <h3 className="mb-5 text-2xl font-bold font-poppins">
          Hardware Setup 🔧
        </h3>

        <p className="mb-5 text-gray-600 text-lg leading-8">
          The game runs on the <strong>mbed NXP LPC1768</strong>, an ARM Cortex-M3
          microcontroller with 512 KB Flash and 32 KB RAM. Peripherals are wired
          directly to the board through GPIO, SPI, and PWM pins.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {hardware.map((hw, i) => (
            <div
              key={i}
              className="p-5 border border-gray-200 rounded-xl bg-white"
            >
              <span className="text-xs font-medium text-blue-500 uppercase tracking-wide">
                {hw.label}
              </span>
              <p className="mt-1 text-xl font-semibold">{hw.value}</p>
              <p className="text-gray-500">{hw.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CIRCUIT SCHEMATIC */}
      <div>
        <h3 className="mb-5 text-2xl font-bold font-poppins">
          Circuit Schematic 🔌
        </h3>

        <img
          src="/SnakeGame/schematic.png"
          className="w-full max-w-5xl mx-auto rounded-xl border border-gray-200"
          alt="Snake game circuit schematic"
        />
      </div>

      {/* CODEBASE */}
      <div>
        <h3 className="mb-5 text-2xl font-bold font-poppins">
          Codebase 🧱
        </h3>

        <p className="mb-5 text-gray-600 text-lg leading-8">
          The project is split into focused modules, each with its own header and
          implementation file. The <strong>doubly linked list</strong> is the core
          data structure — both the snake body and item pool are managed as generic{" "}
          <code className="text-sm bg-gray-100 px-1 rounded">DLinkedList</code>{" "}
          instances, keeping memory usage predictable on the 32 KB SRAM target.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {modules.map((m, i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition bg-white"
            >
              <h4 className="font-mono text-blue-600 font-bold">{m.file}</h4>
              <p className="mt-2 text-gray-600 leading-7">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GAME MECHANICS */}
      <div>
        <h3 className="mb-5 text-2xl font-bold font-poppins">
          Game Mechanics 👾
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition bg-white">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              🎮 Controls
            </h4>

            <ul className="space-y-3">
              {[
                "Nav switch up/down/left/right — change snake direction",
                "Button 1 — toggle snake color state",
                "Button 2 — reverse snake direction",
                "Button 3 — pause and resume the game",
                "Difficulty selected at startup: easy, medium, or hard",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-600 leading-7">
                  <span className="text-blue-500 mt-[2px]">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition bg-white">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              ⚙️ Win / Lose Conditions
            </h4>

            <ul className="space-y-3">
              {[
                "Score ≥ 10 — win screen is displayed",
                "Self-collision — head overlaps the snake body",
                "Wall collision — head exits the 16×16 grid boundary",
                "Game-ending item collision — head hits an END item",
                "Speed scales based on selected difficulty",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-600 leading-7">
                  <span className="text-green-500 mt-[2px]">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* DEMO */}
      <div>
        <h3 className="mb-3 text-2xl font-bold font-poppins">
          Snake Demo 🎥
        </h3>

        <p className="mb-4 text-gray-600 text-lg leading-8">
          Demo of Snake running live on the LPC1768 hardware with the uLCD display,
          navigation switch, pushbutton controls, and audio feedback.
        </p>

        <iframe
          className="w-full aspect-video rounded-xl border border-gray-200"
          src="https://www.youtube.com/embed/KY2q6IRctiI?si=Q2EY7xJQnldvTg8q"
          title="Snake on Embedded Processor Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}