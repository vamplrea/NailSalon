const MenuPriceList = [
    {
        header: "Nail Enhancement",
        priceList: [
            {
                name: "Full Set",
                price: "22+",
            },
            {
                name: "Fill In",
                price: "15+",
            },
            {
                name: "Full Set French",
                price: "22+",
            },
            {
                name: "Full Set Pink & White",
                price: "35+",
            },
            {
                name: "Fill In Pink & White",
                price: "25+",
            },
            {
                name: "Full Set Gel",
                price: "30+",
            },
            {
                name: "Fill In Gel",
                price: "25+",
            },
            {
                name: "Two or more color Ombré(inc. Gel)",
                price: "35+",
            },
            {
                name: "Full Set Cat Eye Gel",
                price: "35+",
            },
            {
                name: "Fill in Cat Eye Gel",
                price: "30+",
            },
            {
                name: "Full Set Dipping",
                price: "35+",
            },
            {
                name: "Fill in Dipping",
                price: "5+",
            },
        ],
    },
    {
        header: "Gelish/Gellac",
        priceList: [
            {
                name: "Gel Polish with Manicure",
                price: "25+",
            },
            {
                name: "Gel French Tip with Manicure",
                price: "30+",
            },
            {
                name: "Gel Cat Eye Polish Manicure",
                price: "25+",
            },
        ],
    },
    {
        header: "Skin Care",
        priceList: [
            {
                name: "Plain Facial",
                price: "35",
            },
            {
                name: "European Facial",
                price: "55",
            },
        ],
    },
    {
        header: "Waxing",
        priceList: [
            {
                name: "Eyebrows",
                price: "9+",
            },
            {
                name: "Lips",
                price: "5+",
            },
            {
                name: "Chins",
                price: "7+",
            },
            {
                name: "Sideburns",
                price: "8",
            },
            {
                name: "Full Face",
                price: "30+",
            },

            {
                name: "Under Arms",
                price: "15+",
            },

            {
                name: "Half Arms",
                price: "22+",
            },

            {
                name: "Full Arms",
                price: "35+",
            },

            {
                name: "Chest",
                price: "20+",
            },

            {
                name: "Back",
                price: "40+",
            },

            {
                name: "Lower Legs",
                price: "30+",
            },

            {
                name: "Full Legs",
                price: "45+",
            },
            {
                name: "Bikini",
                price: "25+",
            },
            {
                name: "Brazilian",
                price: "50+",
            },
        ],
    },
    {
        header: "Skin Care",
        priceList: [
            {
                name: "Full Set",
                price: "22+",
            },
            {
                name: "Fill In",
                price: "15+",
            },
            {
                name: "Full Set French",
                price: "22+",
            },
            {
                name: "Full Set Pink & White",
                price: "35+",
            },
            {
                name: "Fill In Pink & White",
                price: "25+",
            },
            {
                name: "Full Set",
                price: "22+",
            },
            {
                name: "Full Set",
                price: "22+",
            },
            {
                name: "Full Set",
                price: "22+",
            },
            {
                name: "Full Set",
                price: "22+",
            },
            {
                name: "Full Set",
                price: "22+",
            },
            {
                name: "Full Set",
                price: "22+",
            },
        ],
    },

    {
        header: "Natural Nail Care",
        priceList: [
            {
                name: "Manicure",
                price: "15",
            },
            {
                name: "Hot Oil Manicure",
                price: "20",
            },
            {
                name: "1.Spa Pedicure",
                price: "20",
            },
            {
                name: "European Spa Pedicure",
                price: "30",
            },
            {
                name: "Gel Color for Pedicure",
                price: "--",
            },
        ],
    },
    {
        header: "Princes",
        priceList: [
            {
                name: "Manicure",
                price: "8",
            },
            {
                name: "Pedicure",
                price: "13",
            },
            {
                name: "Polish Change",
                price: "3 - $4",
            },
            {
                name: "Polish Change & Design",
                price: "6 - $7",
            },
        ],
    },
];
// multi carousel
function carouselMultiGallery() {
    $("#recipeCarousel").carousel({
        interval: 2000,
    });

    $(".carousel .carousel-item").each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(":first");
        }
        next.children(":first-child").clone().appendTo($(this));

        for (var i = 0; i < 2; i++) {
            next = next.next();
            if (!next.length) {
                next = $(this).siblings(":first");
            }
            next.children(":first-child").clone().appendTo($(this));
        }
    });
}

function mainCarouselButtons() {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
}

function renderOverlay() {}
function toggleCheckedForListItem(itemIndex) {}

function handleItemMenuClick() {
    $(".content a").click(function (event) {
        event.stopPropagation();
        renderModal($(event.currentTarget).text());
        $("#exampleModalCenter").modal();
    });
}

function textModalPriceListHTML(name, price) {
    return `<tr>
                <th scope="row">${name}</th>
                <td>$${price}</td>
            </tr>`;
}

function renderModal(header) {
    //get index
    let i = MenuPriceList.findIndex((e) => e.header === $.trim(header));
    console.log(MenuPriceList[i].priceList.length);
    //loop
    let modalTableHTMLText = "";
    for (let j = 0; j < MenuPriceList[i].priceList.length; j++) {
        modalTableHTMLText += textModalPriceListHTML(
            MenuPriceList[i].priceList[j].name,
            MenuPriceList[i].priceList[j].price
        );
    }
    $("#exampleModalLongTitle").text(MenuPriceList[i].header);
    $("#MenuTableBody").html(modalTableHTMLText);
}

function galHTMLText(index) {
    return `
    <div class="carousel-item ">
        <img width="450"
        height="600"
            class="d-block col-3 img-thumbnail img-fluid"
            src="img/gal${index}.jpg"
        />
    </div>`;
}

const maxNumOfGalPic = 8;

function addGalleries() {
    let moreGal = "";
    for (let i = 2; i < maxNumOfGalPic; i++) {
        moreGal += galHTMLText(i);
    }
    $("#secondCarouselItem").append(moreGal);
}

$(function () {
    addGalleries();
    mainCarouselButtons();
    carouselMultiGallery();
    handleItemMenuClick();
});
