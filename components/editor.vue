<script setup lang="ts">
import StarterKit from "@tiptap/starter-kit";
import { Editor, EditorContent } from "@tiptap/vue-3";

const props = defineProps({
    modelValue: {
        type: Object,
        default: {},
    },
    title: {
        type: String,
    },
});

const emits = defineEmits(["update:modelValue", "update:title"]);

const editor = new Editor({
    extensions: [StarterKit],
    content: props.modelValue,
    onUpdate: () => {
        emits("update:modelValue", editor.getJSON());
    },
    editorProps: {
        attributes: {
            class: "focus:outline-none",
        },
    },
});

watch(
    () => props.modelValue,
    (value) => {
        const isSame =
            JSON.stringify(editor.getJSON()) === JSON.stringify(value);

        if (isSame) {
            return;
        }

        editor.commands.setContent(value, false);
    }
);
</script>

<template>
    <div>
        <input
            placeholder="Title"
            :value="title"
            @input="(event) => emits('update:title', (event.target as any).value)"
            class="w-full px-6 py-1 text-lg font-bold focus:outline-none"
        />
        <hr />
    </div>
    <div
        v-if="editor"
        class="border border-gray-200 p-2 rounded-lg text-sm overflow-scroll"
    >
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().toggleBold().run()"
            :disabled="!editor.can().chain().focus().toggleBold().run()"
            :class="{ 'is-active': editor.isActive('bold') }"
        >
            bold
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().toggleItalic().run()"
            :disabled="!editor.can().chain().focus().toggleItalic().run()"
            :class="{ 'is-active': editor.isActive('italic') }"
        >
            italic
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().toggleStrike().run()"
            :disabled="!editor.can().chain().focus().toggleStrike().run()"
            :class="{ 'is-active': editor.isActive('strike') }"
        >
            strike
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().toggleCode().run()"
            :disabled="!editor.can().chain().focus().toggleCode().run()"
            :class="{ 'is-active': editor.isActive('code') }"
        >
            code
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().unsetAllMarks().run()"
        >
            clear marks
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().clearNodes().run()"
        >
            clear nodes
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().setParagraph().run()"
            :class="{ 'is-active': editor.isActive('paragraph') }"
        >
            paragraph
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        >
            h1
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
        >
            h2
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
        >
            h3
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
        >
            h4
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
        >
            h5
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
            :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
        >
            h6
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().toggleBulletList().run()"
            :class="{ 'is-active': editor.isActive('bulletList') }"
        >
            bullet list
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().toggleOrderedList().run()"
            :class="{ 'is-active': editor.isActive('orderedList') }"
        >
            ordered list
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().toggleCodeBlock().run()"
            :class="{ 'is-active': editor.isActive('codeBlock') }"
        >
            code block
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().toggleBlockquote().run()"
            :class="{ 'is-active': editor.isActive('blockquote') }"
        >
            blockquote
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().setHorizontalRule().run()"
        >
            horizontal rule
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().setHardBreak().run()"
        >
            hard break
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().undo().run()"
            :disabled="!editor.can().chain().focus().undo().run()"
        >
            undo
        </Button>
        <Button
            class="float-left m-0.5"
            @click="editor.chain().focus().redo().run()"
            :disabled="!editor.can().chain().focus().redo().run()"
        >
            redo
        </Button>
    </div>
    <EditorContent :editor="editor" class="my-10 grow" />
</template>
