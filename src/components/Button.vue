<template>
  <button class="button">
    <slot />
  </button>
</template>

<style>
.button {
  position: relative;
  display: inline-block;
  padding: 3px 12px;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;

  border: 1px solid;
  border-color: rgba(27,31,36,0.15);
  border-radius: 6px;

  -webkit-user-select: none;
  user-select: none;

  -webkit-appearance: none;
  appearance: none;

  color: #24292f;
  background-color: #f6f8fa;
  box-shadow: 0 1px 0 rgba(27,31,36,0.04), inset 0 1px 0 rgba(255,255,255,0.25);
  transition: 80ms cubic-bezier(0.33, 1, 0.68, 1);
  transition-property: all;
  transition-duration: 80ms;
  transition-property: color,background-color,box-shadow,border-color;
}

.button:hover {
  background-color: #f3f4f6;
  border-color: rgba(27,31,36,0.15);
  transition-duration: .1s;
}
</style>
