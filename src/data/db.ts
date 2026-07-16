import { LORE_DATA } from "./loreData";
import type { LoreSection, Character } from "./loreData";

// Keys for local storage
const LORE_STORAGE_KEY = "ashera_lore_data_v2";

export function getInitialLoreData(): LoreSection[] {
if (typeof window === "undefined") return LORE_DATA;

const saved = localStorage.getItem(LORE_STORAGE_KEY);
if (saved) {
try {
return JSON.parse(saved);
} catch (e) {
console.error("Error parsing saved lore data, reverting to default", e);
}
}
return LORE_DATA;
}

export function saveLoreData(data: LoreSection[]) {
localStorage.setItem(LORE_STORAGE_KEY, JSON.stringify(data));
}

// Helpers for Character Management
export function addOrUpdateCharacter(
data: LoreSection[],
subSectionId: string,
character: Character
): LoreSection[] {
const newData = data.map((section) => {
if (section.id === "carnet_adresse" && section.subsections) {
const newSubsections = section.subsections.map((sub) => {
if (sub.id === subSectionId) {
const chars = sub.characters || [];
const exists = chars.some((c) => c.id === character.id);

let updatedChars;
if (exists) {
updatedChars = chars.map((c) => (c.id === character.id ? character : c));
} else {
updatedChars = [...chars, character];
}

return { ...sub, characters: updatedChars };
}
return sub;
});
return { ...section, subsections: newSubsections };
}
return section;
});

saveLoreData(newData);
return newData;
}

export function deleteCharacter(
data: LoreSection[],
subSectionId: string,
characterId: string
): LoreSection[] {
const newData = data.map((section) => {
if (section.id === "carnet_adresse" && section.subsections) {
const newSubsections = section.subsections.map((sub) => {
if (sub.id === subSectionId) {
const chars = sub.characters || [];
const updatedChars = chars.filter((c) => c.id !== characterId);
return { ...sub, characters: updatedChars };
}
return sub;
});
return { ...section, subsections: newSubsections };
}
return section;
});

saveLoreData(newData);
return newData;
}

// Helpers for Gallery Management (since it is represented as subcategories, we merge them into a unified list or keep them inside subsections)
export function addGalleryImageToDB(
data: LoreSection[],
image: { id: string; name: string; description: string; avatarUrl: string }
): LoreSection[] {
const newData = data.map((section) => {
if (section.id === "galerie_ashera" && section.subsections) {
// Find or create a subsection for custom added images, or put it in illustrations
const targetSubId = "illustrations"; // Put custom additions under illustrations
const newSubsections = section.subsections.map((sub) => {
if (sub.id === targetSubId) {
const chars = sub.characters || [];
return {
...sub,
characters: [
...chars,
{
id: image.id,
name: image.name,
description: image.description,
avatarUrl: image.avatarUrl,
status: "Illustration"
}
]
};
}
return sub;
});
return { ...section, subsections: newSubsections };
}
return section;
});

saveLoreData(newData);
return newData;
}

export function deleteGalleryImageFromDB(
data: LoreSection[],
imageId: string
): LoreSection[] {
const newData = data.map((section) => {
if (section.id === "galerie_ashera" && section.subsections) {
const newSubsections = section.subsections.map((sub) => {
const chars = sub.characters || [];
const updatedChars = chars.filter((c) => c.id !== imageId);
return { ...sub, characters: updatedChars };
});
return { ...section, subsections: newSubsections };
}
return section;
});

saveLoreData(newData);
return newData;
}
