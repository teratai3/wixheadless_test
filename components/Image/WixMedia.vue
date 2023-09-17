<template>
    <img :src="imageUrl" :alt="alt" :width="width" :height="height" :class="className" />
</template>

<script>
import { media as wixMedia } from '@wix/api-client';


export default {
    props: {
        media: {
            default: ""
        },
        alt: {
            default: ""
        },
        width: {
            default: 640
        },
        height: {
            default: 320
        },
        className: {
            default: ""
        },
    },
    computed: {
        imageUrl() {
            return this.media
                ? this.getImageUrlForMedia(this.media, this.width, this.height)
                : this.$PLACEHOLDER_IMAGE;
        },
    },
    
    methods: {
        getImageUrlForMedia(media, width, height) {
            if (media.startsWith('wix:image')) {
                //return wixMedia.getScaledToFillImageUrl(media, width, height, {});
                return wixMedia.getScaledToFitImageUrl(media, width, height,{});
            } else {
                return media;
            }
        }
    }
};
</script>