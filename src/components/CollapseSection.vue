<template>
    <div class="section-collapse">
        <slot></slot>
    </div>
</template>

<script>
    let duration = 300;
    export default {
        name: 'SectionCollapse',
        props: {
            collapsed: {
                type: Boolean,
                required: true
            },
            vertical: {
                type: Boolean,
                default: true
            },
            horizontal: {
                type: Boolean,
                default: false
            },
            simultaneous: {
                type: Boolean,
                default: true
            },
            fade: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            timeout: 0
        }),
        watch: {
            collapsed() {
                this.$nextTick(() => {
                    this.update();
                });
            }
        },
        methods: {
            getDimensions() {
                const el = this.$el;
                el.style.height = 'auto';
                el.style.width = 'auto';
                let height = window.getComputedStyle(el).height;
                let width = window.getComputedStyle(el).width;
                el.style.height = null;
                el.style.width = null;
                return {width, height};
            },
            async _transition(width, height, horizontal, vertical, finalClass) {
                const el = this.$el;
                el.setAttribute('class', this.getClassWith('transition'));
                el.offsetHeight;
                el.offsetWidth; // força a re-renderizar
                if (vertical) el.style.height = height;
                if (horizontal) el.style.width = width;
                return new Promise((resolve) => {
                    this.timeout = setTimeout(() => {
                        el.setAttribute('class', this.getClassWith(finalClass));
                        if (vertical) el.style.height = null;
                        if (horizontal) el.style.width = null;
                        this.timeout = 0;
                        resolve();
                    }, duration);
                });
            },
            async transition(width, height, finalClass) {
                if (this.simultaneous) {
                    await this._transition(width, height, this.horizontal, this.vertical, finalClass);
                } else {
                    if (width && height) {
                        if (this.horizontal) await this._transition(width, null, true, false);
                        await this._transition(width, height, true, true, finalClass);
                    } else {
                        if (this.horizontal) await this._transition(null, height, false, true);
                        await this._transition(width, height, true, true, finalClass);
                    }
                }
            },
            async show() {
                this.$emit('show');
                let {width, height} = this.getDimensions();
                await this.transition(width, height, 'show');
                this.$emit('shown');
            },
            async hide() {
                const el = this.$el;
                let {width, height} = this.getDimensions();
                if (this.vertical) el.style.height = height;
                if (this.horizontal) el.style.width = width;
                this.$emit('hide');
                await this.transition(0, 0, 'hide');
                this.$emit('hidden');
            },
            update() {
                if (this.timeout) clearTimeout(this.timeout);
                if (!this.collapsed) {
                    this.show();
                } else {
                    this.hide();
                }
            },
            getClassWith(...additional) {
                let classes = ['section-collapse'];
                if (this.vertical) classes.push('vertical');
                if (this.horizontal) classes.push('horizontal');
                if (this.fade) classes.push('fade');
                classes.push(...additional);
                return classes.join(' ');
            }
        },
        mounted() {
            const el = this.$el;
            if (!this.collapsed) {
                el.setAttribute('class', this.getClassWith('show'));
            } else {
                el.setAttribute('class', this.getClassWith('hide'));
            }
        }
    };
</script>

<style lang="scss">
    .section-collapse {
        /*
         * This prevents margin collapse.
         * Without it having immediate elements within the collapse that have a margin will incur a "jump" by the
         * animation's end because it's height will be wrongly calculated.
         */
        &:before, &:after{
            content: ' ';
            display: table;
        }
        transition-property: height, width, opacity;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        &.hide {
            overflow: hidden;
            &.vertical {
                height: 0;
            }
            &.horizontal {
                width: 0;
            }
        }
        &.show {
            display: block;
        }
        &.transition {
            position: relative;
            overflow: hidden;
            &.vertical {
                height: 0;
            }
            &.horizontal {
                width: 0;
            }
        }
        &.fade {
            opacity: 0;
            &.fade.show {
                opacity: 1;
            }
        }
    }
</style>
