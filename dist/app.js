"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("./api");
const promises_1 = require("fs/promises");
const PAGES_TO_GENERATE = 10;
const PORT = 3000;
const htmlTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Dynamic Website</title>
  </head>
  <body>
    <div class="pl-12 pt-12">
      <div class="grid grid-flow-col max-md:grid-flow-row">
        <div class="flex flex-col">
          <h4 class="text-[#2B2B35] text-lg text-left">2237769</h4>
          <h1 class="font-extrabold text-7xl max-w-xl text-left pt-2">
            EXPLORE THE NIGHTLIFE OF YOUR CITY
          </h1>
          <p class="text-[24px] pt-8 font-semibold">
            OUTDOOR & SPORTING GOODS COMPANY
          </p>
          <div class="pt-8">
            <button
              class="py-6 px-8 bg-[#D93A31] flex flex-row gap-8 inline-block"
            >
              <span class="text-white text-left"> EXPLORE MORE</span>
              <span class="grid content-center">
                <img src="./images/Arrow 3.png" class="pt-[0.3rem]" alt="" />
              </span>
            </button>
          </div>
          <p class="text-xl text-[#2B2B35] font-[18px] pt-4">
            We have more special goods for you 🚀
          </p>
          <div class="flex flex-row pt-12 gap-24">
            <div class="flex flex-col">
              <span class="text-[#2B2B35]">MORE THAN</span>
              <span class="text-[5rem] font-extrabold">50+</span>
              <span class="font-semibold text-sm">ADVENTURE PRODUCTS</span>
            </div>
            <div class="flex flex-col">
              <span class="text-[#2B2B35]">MORE THAN</span>
              <span class="text-[5rem] font-extrabold">75+</span>
              <span class="font-semibold text-sm">OUTLET IN INDONESIA</span>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-col justify-end pr-12">
            <span class="text-[#9497A8] text-right">PRICE</span>
            <span class="text-right pt-2">0.1</span>
          </div>
          <div class="flex pt-12 relative justify-end">
            <div
              class="flex flex-col absolute right-10 sm:right-20 top-[-10rem] sm:top-[28rem] z-20"
            >
              <img
                src="./images/logoGrid.png"
                class="w-20 h-20 sm:w-24 sm:h-24"
                alt=""
              />
            </div>
            <div class="flex flex-col flex-grow-1">
              <img
                src="./images/Activity_Stock_1.png"
                class="max-w-full h-auto"
                alt=""
              />
            </div>
            <div class="flex-col">
              <div class="flex flex-col pt-8 sm:pt-32">
                <img
                  src="./images/Group 33137.png"
                  class="max-w-full h-auto"
                  alt=""
                />
              </div>
              <div class="flex flex-col z-10 absolute -bottom-[6rem]">
                <img src="./images/girl.png" class="max-w-full h-auto" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="bg-[#2B2B35] py-10">
        <div class="flex flex-row gap-x-40 pl-12">
          <div class="flex flex-row gap-4">
            <img src="./images/sendFooter.png" width="50" height="50" alt="" />
            <div class="flex flex-col text-white">
              <span class="text-sm text-[#B5B5C2]">ACCESSIBILITY</span>
              <span class="text-base font-extrabold">0.32</span>
            </div>
          </div>
          <div class="flex flex-row gap-4">
            <img src="./images/tickFooter.png" width="50" height="50" alt="" />
            <div class="flex flex-col text-white">
              <span class="text-sm text-[#B5B5C2]">TYPE</span>
              <span class="text-base font-extrabold">SOCIAL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </body>
  <script src="./src/api.ts"></script>
</html>
`;
// async function generatePages() {
//   try {
//     const data = await fetchData();
//     if (!data) {
//       console.error("Error fetching data.");
//       return;
//     }
//     for (let i = 1; i <= PAGES_TO_GENERATE; i++) {
//       const html = htmlTemplate
//         .replace("{{ activity }}", data.activity)
//         .replace("{{ type }}", data.type)
//         .replace("{{ participants }}", data.participants.toString())
//         .replace("{{ price }}", data.price.toString())
//         .replace("{{ accessibility }}", data.accessibility.toString());
//       await writeFile(`dist/page${i}.html`, html);
//       console.log(`Page ${i} generated successfully!`);
//     }
//   } catch (error) {
//     console.error("Error generating pages:", error);
//   }
// }
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, api_1.fetchData)();
            if (!data) {
                console.error("Error fetching data.");
                return;
            }
            for (let i = 1; i <= PAGES_TO_GENERATE; i++) {
                const html = htmlTemplate
                    .replace("{{ activity }}", data.activity)
                    .replace("{{ type }}", data.type)
                    .replace("{{ participants }}", data.participants.toString())
                    .replace("{{ price }}", data.price.toString())
                    .replace("{{ accessibility }}", data.accessibility.toString());
                yield (0, promises_1.writeFile)(`dist/page${i}.html`, html);
                console.log(`Page ${i} generated successfully!`);
            }
        }
        catch (error) {
            console.error("Error generating pages:", error);
        }
    });
}
startServer();
startServer();
//# sourceMappingURL=app.js.map