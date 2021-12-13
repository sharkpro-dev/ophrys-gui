<script setup lang="ts">
import { watch, ref, computed } from 'vue';
import { gsap } from "gsap";


let formatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 2
  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const DECREASING_COLOR = "#f05350";
const INCREASING_COLOR = "#26a69a";

const element = ref(null)

const props = withDefaults(defineProps<{
    label?: String,
    modelValue?: Number,
    decimals: Number,
    flash: Boolean
}>(), {
  decimals: 3,
  flash: false
});

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


const roundedValue = computed(() => {
    const modelValue : Number= props?.modelValue || 0;
    //return (Math.round(modelValue.valueOf() * 100) / 100).toFixed(props.decimals.valueOf());
    return formatter.format(modelValue.valueOf())
 });


</script>

<template>
    <div class="value-container">
        <label v-if="props.label">{{ props.label }} </label>
        <p ref="element">{{ roundedValue }}</p>
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
    margin-bottom: 10px;
}

label {
    font-weight: 600;
    width: 150px;
    text-align: initial;
}

</style>
