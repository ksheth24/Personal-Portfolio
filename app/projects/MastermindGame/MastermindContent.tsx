"use client";

export default function MastermindAIContent() {
  const features = [
    {
      title: "On-device TinyML prediction",
      desc: "Runs an Edge Impulse classifier directly on the ESP32 to predict the opponent’s code-generation style without relying on a cloud API.",
    },
    {
      title: "FreeRTOS task pipeline",
      desc: "Separates BLE input handling, ML classification, and AI search logic using queues, semaphores, and mutexes.",
    },
    {
      title: "BLE game communication",
      desc: "Implements a custom NimBLE GATT server to receive code samples and feedback, then notify the client with the next AI-generated guess.",
    },
    {
      title: "ML-assisted search pruning",
      desc: "Uses the predicted opponent pattern to reduce the 1,296-code Mastermind search space before running minimax-style guess selection.",
    },
  ];

  const pipeline = [
    {
      step: "01",
      title: "Receive BLE data",
      desc: "Characteristic writes send either 4-byte code samples or 2-byte black/white feedback into FreeRTOS queues.",
    },
    {
      step: "02",
      title: "Classify player style",
      desc: "The ML task extracts features such as uniqueness, descending order, and max value, then updates the predicted strategy.",
    },
    {
      step: "03",
      title: "Prune candidates",
      desc: "The AI task filters impossible or unlikely codes from the active candidate pool based on the predicted style and feedback.",
    },
    {
      step: "04",
      title: "Send best guess",
      desc: "A minimax-style scorer selects the guess that minimizes the worst-case remaining search space, then sends it over BLE notify.",
    },
  ];

  const modules = [
    {
      file: "CharacteristicCallbacks",
      desc: "Routes BLE writes into code and feedback queues depending on payload length.",
    },
    {
      file: "mlTask",
      desc: "Consumes observed code samples and runs Edge Impulse inference on-device.",
    },
    {
      file: "aiTask",
      desc: "Waits for button-triggered semaphores, performs pruning, computes guesses, and sends BLE notifications.",
    },
    {
      file: "prePrune()",
      desc: "Uses the predicted style class to eliminate unlikely candidates before expensive search.",
    },
    {
      file: "getBestGuess()",
      desc: "Scores every possible guess against remaining active codes to minimize the worst-case result bucket.",
    },
    {
      file: "prune()",
      desc: "Removes candidates whose black/white feedback would not match the latest guess result.",
    },
  ];

  const system = [
    { label: "Search Space", value: "1,296", detail: "6⁴ possible Mastermind codes" },
    { label: "Inference", value: "TinyML", detail: "Edge Impulse classifier on-device" },
    { label: "Concurrency", value: "FreeRTOS", detail: "Tasks, queues, semaphores, mutexes" },
    { label: "Wireless", value: "BLE", detail: "NimBLE GATT service + notify" },
  ];

  return (
    <div className="space-y-14">
      <img
        src="/Mastermind/homescreen.png"
        className="w-full max-w-5xl mx-auto rounded-xl border border-gray-200"
        alt="Mastermind running inference"
      />

      {/* HERO */}
      <div>
        <div className="flex flex-row space-x-5 items-center">
          <h2 className="text-3xl font-bold font-montserrat">
            Embedded AI/ML Mastermind Solver
          </h2>

          <a
            href="https://github.com/ksheth24/Embedded-AI-ML-Mastermind-Solver"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/GitHub.png"
              className="w-10 hover:scale-110 transition"
              alt="github logo"
            />
          </a>
        </div>

        <p className="mt-3 text-gray-600 text-lg leading-8">
          A real-time embedded AI system that solves Mastermind using
          <strong> Bluetooth Low Energy</strong>, <strong>FreeRTOS concurrency</strong>,
          <strong> on-device TinyML inference</strong>, and
          <strong> minimax-style search optimization</strong>. The system runs entirely on
          an ESP32, combining wireless communication, machine learning, interrupts, and
          hardware-aware C++ design.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {[
            "C++",
            "ESP32",
            "FreeRTOS",
            "NimBLE",
            "Bluetooth Low Energy",
            "Edge Impulse",
            "TinyML",
            "Interrupts",
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

      {/* SYSTEM SNAPSHOT */}
      <div>
        <h3 className="mb-5 text-2xl font-bold font-poppins">
          System Snapshot ⚙️
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {system.map((s, i) => (
            <div key={i} className="p-5 border border-gray-200 rounded-xl bg-white">
              <span className="text-xs font-medium text-blue-500 uppercase tracking-wide">
                {s.label}
              </span>
              <p className="mt-1 text-xl font-semibold">{s.value}</p>
              <p className="text-gray-500">{s.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PIPELINE */}
      <div>
        <h3 className="mb-5 text-2xl font-bold font-poppins">
          AI Decision Pipeline 🧠
        </h3>

        <p className="mb-5 text-gray-600 text-lg leading-8">
          The solver is built as a staged embedded pipeline. BLE callbacks feed
          real-time game data into RTOS queues, the ML task updates the predicted
          player strategy, and the AI task uses that prediction to reduce search
          before selecting the next best guess.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {pipeline.map((p) => (
            <div
              key={p.step}
              className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition bg-white"
            >
              <p className="mb-2 font-mono text-blue-600 font-bold">
                {p.step}
              </p>
              <h4 className="text-lg font-semibold">{p.title}</h4>
              <p className="mt-1 text-gray-600 leading-7">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CODEBASE */}
      <div>
        <h3 className="mb-5 text-2xl font-bold font-poppins">
          Codebase 🧱
        </h3>

        <p className="mb-5 text-gray-600 text-lg leading-8">
          The project is organized around asynchronous embedded components:
          BLE callbacks handle wireless I/O, FreeRTOS tasks isolate compute-heavy
          ML and AI work, and synchronization primitives keep shared prediction state
          safe across concurrent execution.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {modules.map((m, i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition bg-white"
            >
              <h4 className="font-mono text-blue-600 font-bold">
                {m.file}
              </h4>
              <p className="mt-2 text-gray-600 leading-7">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ALGORITHM */}
      <div>
        <h3 className="mb-5 text-2xl font-bold font-poppins">
          Search Strategy 🔍
        </h3>

        <div className="p-6 border border-gray-200 rounded-xl bg-white">
          <p className="text-gray-600 text-lg leading-8">
            Mastermind has <strong>1,296 possible codes</strong> in this setup.
            The solver first initializes every possible combination, then narrows
            the candidate pool using two layers of reasoning: an ML-guided
            pre-pruning step and a feedback-based pruning step after each guess.
            The final guess is selected by scoring how many possibilities would
            remain under each black/white feedback outcome.
          </p>

          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "Generate all 6⁴ codes",
              "Predict opponent pattern",
              "Prune + choose minimax guess",
            ].map((step, i) => (
              <div key={i} className="rounded-lg bg-gray-50 border border-gray-200 p-4">
                <p className="font-mono text-blue-600 font-bold">0{i + 1}</p>
                <p className="mt-1 text-gray-700 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DEMO */}
      <div>
        <h3 className="mb-3 text-2xl font-bold font-poppins">
          Demo 🎥
        </h3>

        <p className="mb-4 text-gray-600 text-lg leading-8">
          Demo of the embedded AI solver running live on hardware.
        </p>

        <iframe
          className="w-full aspect-video rounded-xl border border-gray-200"
          src="https://www.youtube.com/embed/o4as3qSsp8A?si=KS5DSq47C2RUnnob"
          title="AI-Powered Mastermind Solver Demo"
          allowFullScreen
        />
      </div>
    </div>
  );
}