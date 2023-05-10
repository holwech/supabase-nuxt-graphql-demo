<script setup lang="ts">
import StarterKit from "@tiptap/starter-kit";
import { generateHTML } from "@tiptap/html";
import DOMPurify from "isomorphic-dompurify";

const props = defineProps({
    json: {
        type: String,
        default: "{}",
    },
    shorten: {
        type: Boolean,
        default: false,
    },
});

const keepFirst = (json: any) => {
    return {
        type: "doc",
        content: [json.content[0]],
    };
};

let output = DOMPurify.sanitize(
    generateHTML(JSON.parse(props.json), [StarterKit])
);
if (props.shorten) {
    output = DOMPurify.sanitize(
        generateHTML(keepFirst(JSON.parse(props.json)), [StarterKit])
    );
}
</script>

<template>
    <div class="ProseMirror" v-html="output"></div>
</template>
