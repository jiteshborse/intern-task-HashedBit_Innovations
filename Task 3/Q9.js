function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}

const text = "JavaScript is a powerful programming language used worldwide.";
console.log("Word count:", countWords(text));
