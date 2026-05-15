"use client";

export default function SnakeContent() {

  const features = [
    {
      title: "Doubly linked list snake body",
      desc: "The snake is represented as a custom DLinkedList of SnakeItem nodes, enabling O(1) head insertion and tail deletion on every move tick without heap fragmentation.",
    },
    {
      title: "Nav switch & button input",
      desc: "Directional movement and game controls are read from a 5-way nav switch and three pushbuttons wired with PullUp resistors, polled each game loop iteration.",
    },
    {
      title: "uLCD-144-G2 SPI display",
      desc: "All rendering targets a 128×128 pixel LCD over SPI at 115,200 baud, using a 16×16 cell grid (CELL_SIZE = 8) and BLIT calls to erase the previous tail position.",
    },
    {
      title: "Multi-item type system",
      desc: "Items on the board include FRUIT, BOOST, POISON, END, CLEAR, and SPEED types, each stored in a separate DLinkedList and checked for collision against the snake head each tick.",
    },
  ];

  const modules = [
    {
      file: "main.cpp",
      desc: "Game loop, start screen, difficulty selection, player name, collision checks, score display, and pause logic.",
    },
    {
      file: "snake.cpp / snake.h",
      desc: "Snake struct, DLL-backed body, move, grow, draw, wall collision, self-collision, and direction-reversal logic.",
    },
    {
      file: "hardware.cpp / hardware.h",
      desc: "Hardware init: uLCD on p9/p10/p11, nav switch on p12–p16, three pushbuttons on p21–p23, PWM speaker on p25.",
    },
    {
      file: "items.cpp / items.h",
      desc: "Items struct, DLL of on-screen items, random placement, item-to-item and item-to-snake collision detection, item replacement.",
    },
    {
      file: "doubly_linked_list.cpp",
      desc: "Generic doubly linked list: insertHead, insertTail, insertBefore, insertAfter, deleteNode, split, destroyList.",
    },
    {
      file: "graphics.cpp / graphics.h",
      desc: "Draw functions for snake head, snake body (normal and alternate color states), and all item types via uLCD BLIT.",
    },
  ];

  return (
    <div className="space-y-10">
      <img
        src = "/SnakeGame/homescreen.png"
        className = "w-200 mx-auto rounded-xl"
        alt = "Schematic"
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
              alt="githublogo"
            />
          </a>
        </div>

        <p className="mt-3 text-gray-600">
          A fully playable Snake game built in C++ and deployed directly onto an NXP LPC1768
          ARM Cortex-M3 microcontroller using the Mbed OS framework — covering peripheral
          interfacing, real-time game logic, and custom data structures under tight hardware constraints.
        </p>
      </div>

      {/* FEATURES */}
      <div>
        <h3 className="mb-4 text-xl font-semibold font-poppins">
          Key Features ⭐
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <div key={i} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
              <h4 className="font-semibold">{f.title}</h4>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* HARDWARE */}
      <div>
        <h3 className="mb-4 text-xl font-semibold font-poppins">
          Hardware Setup 🔧
        </h3>
        <p className="text-gray-600">
          The project runs on the <strong>mbed NXP LPC1768</strong> (ARM Cortex-M3, 96 MHz,
          512 KB Flash, 32 KB RAM). Peripherals are wired directly to the MCU's GPIO and serial pins:
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Display", value: "uLCD-144-G2", detail: "SPI — tx: p9, rx: p10, reset: p11" },
            { label: "Navigation", value: "5-way Nav Switch", detail: "p12, p13, p14, p15, p16" },
            { label: "Buttons", value: "3× Pushbutton", detail: "p21, p22, p23 — PullUp, active-LOW" },
            { label: "Audio", value: "PWM Speaker", detail: "PwmOut on p25 + DAC on p18" },
          ].map((hw, i) => (
            <div key={i} className="p-4 border border-gray-200 rounded-lg">
              <span className="text-xs font-medium text-blue-500 uppercase tracking-wide">{hw.label}</span>
              <p className="font-semibold mt-0.5">{hw.value}</p>
              <p className="text-sm text-gray-500">{hw.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-xl font-semibold font-poppins">
          Circuit Schematic 🔌
        </h3>
        <img
          src = "/SnakeGame/schematic.png"
          className = "w-200 mx-auto rounded-xl"
          alt = "Schematic"
        />
      </div>

      {/* CODEBASE */}
      <div>
        <h3 className="mb-4 text-xl font-semibold font-poppins">
          Codebase 🧱
        </h3>
        <p className="text-gray-600">
          The project is split into focused modules, each with its own header and implementation file.
          The <strong>doubly linked list</strong> is the core data structure — both the snake body and
          the item pool are managed as generic <code className="text-sm bg-gray-100 px-1 rounded">DLinkedList</code> instances,
          keeping memory usage predictable on the 32 KB SRAM target.
        </p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {modules.map((m, i) => (
            <div key={i} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
              <h4 className="font-semibold text-sm font-mono text-blue-600">{m.file}</h4>
              <p className="text-sm text-gray-600 mt-1">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* GAME MECHANICS */}
      <div>
        <h3 className="mb-6 text-xl font-semibold font-poppins">
          Game Mechanics 👾
        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              🎮 Controls
            </h4>
            <ul className="space-y-3">
              {[
                "Nav switch up/down/left/right — change snake direction",
                "Button 1 — toggle snake color state (green ↔ red)",
                "Button 2 — reverse snake direction (head becomes tail)",
                "Button 3 — pause and resume the game",
                "Difficulty selected at startup: easy / medium / hard",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700 text-sm">
                  <span className="text-blue-500 mt-[2px]">●</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              ⚙️ Win / Lose Conditions
            </h4>
            <ul className="space-y-3">
              {[
                "Score ≥ 10 — game win screen displayed",
                "Self-collision — head overlaps any body segment",
                "Wall collision — head exits the 16×16 grid boundary",
                "Item collision — head hits a game-ending item type",
                "Speed scales with difficulty (tick modulo snake->speed)",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700 text-sm">
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
        <h3 className="mb-3 text-xl font-semibold font-poppins">
          Snake Demo 🎥
        </h3>
        <p className="mb-4 text-gray-600">
          Below is a demo of Snake running live on the LPC1768 hardware with the uLCD display,
          nav switch, and pushbutton controls.
        </p>
          <iframe 
            className="rounded-xl w-full aspect-video"
            src="https://www.youtube.com/embed/KY2q6IRctiI?si=Q2EY7xJQnldvTg8q" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
      </div>

    </div>
  );
}