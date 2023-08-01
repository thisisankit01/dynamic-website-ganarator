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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const axios_1 = __importDefault(require("axios"));
function fetchData(maxRetries = 3) {
    return __awaiter(this, void 0, void 0, function* () {
        const axiosInstance = axios_1.default.create({
            timeout: 5000, // Set a longer timeout value (in milliseconds)
        });
        let retries = 0;
        while (retries < maxRetries) {
            try {
                // Simulate a 5-second delay in the response
                yield new Promise((resolve) => setTimeout(resolve, 5000));
                // Replace the following line with the actual API call
                const res = yield axiosInstance.get(`https://www.boredapi.com/api/activity`);
                // For testing purposes, return mock data instead of making the actual API call
                const mockData = {
                    activity: "Mock Activity",
                    type: "mock",
                    participants: 1,
                    price: 0.5,
                    link: "",
                    key: "mock-key",
                    accessibility: 0.2,
                };
                return res.data;
            }
            catch (err) {
                console.error(`Error while fetching data: ${err.message}`);
                retries++;
            }
        }
        console.error("Failed to fetch data after multiple retries.");
        return null;
    });
}
exports.fetchData = fetchData;
console.log(fetchData());
//# sourceMappingURL=api.js.map