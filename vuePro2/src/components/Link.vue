<template>
    <li>
        <a :href="href" @click="$emit('click')">
            <slot></slot>
        </a>
    </li>
</template>
<script>
    export default {
        name: 'Link',
        props: ['href'],
        methods: {
        }
    }
</script>
