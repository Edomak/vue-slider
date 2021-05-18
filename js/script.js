var app = new Vue (
    {
        el: "#root",
        data: {
            images: [
                "img/banksy1.jpeg",
                "img/banksy2.jpeg",
                "img/banksy3.jpeg",
                "img/banksy4.png",
                "img/banksy5.jpeg",
            ],
            imageIndex: 0,
            classActive: "active",
        },
        methods: {
            nextImage: function () {
                this.imageIndex++
                if (this.imageIndex == this.images.length){
                    this.imageIndex = 0;
                }
            },
            prevImage: function () {
                this.imageIndex--
                if (this.imageIndex == -1) {
                    this.imageIndex = this.images.length -1;
                }
            },
        },
    }
)