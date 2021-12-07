<script setup lang="ts">
import { watch, ref } from 'vue';
import { gsap } from "gsap";

const DECREASING_COLOR = "#f05350";
const INCREASING_COLOR = "#26a69a";

const element = ref(null)

const props = defineProps({
    label: String,
    modelValue: Number,
    flash: Boolean
})


watch(
    () => props.modelValue,
    (modelValue, prevModelValue) => {
        if (!props.flash)
            return;
        let color = "black";

        modelValue = modelValue || 0;
        prevModelValue = prevModelValue || 0;

        if (modelValue < prevModelValue) {
            color = DECREASING_COLOR;
        } else if (prevModelValue < modelValue) {
            color = INCREASING_COLOR;
        }


        gsap.timeline().to(element.value, {
            color: color,
            duration: 0.75
        }).to(element.value, {
            color: "black",
            duration: 0.75
        });
    }
)

</script>

<template>
    <div class="value-container">
        <label v-if="props.label">{{ props.label }} </label>
        <p ref="element">{{ props.modelValue?.toFixed(2) }}</p>
    </div>
</template>

<style scoped>

 p {
    white-space: nowrap;
    margin: 0
}

.value-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 40px;
    margin-bottom: 10px;
}

label {
    font-weight: 600;
    width: 150px;
    text-align: initial;
}

</style>
