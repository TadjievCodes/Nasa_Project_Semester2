// Es6 method of creating a Constructor for Objects through class constructor instead of the old way functon style

class Day {
    constructor(data) {
        this.data = data;

        // Validation of task 9 if anything includes undefined then change to Unknown
        if (this.data.title == undefined) {
            this.data.title = "Unknown";
        }
        if (this.data.date == undefined) {
            this.data.date = "Unknown";
        }
        if (this.data.media_type == undefined) {
            this.data.media_type = "Unknown";
        }
        if (this.data.url == undefined) {
            this.data.url = "Unknown";
        }
        if (this.data.explanation == undefined) {
            this.data.explanation = "Unknown";
        }
        if (this.data.copyright == undefined) {
            this.data.copyright = "Unknown";
        }
    }

    createView(container, res_btns) {

        // clearing the Output everytime after the display to display another item
        container.innerHTML = "";

        let card = document.createElement('div');

        card.classList.add('card')

        let title_el = document.createElement('h1');
        title_el.innerText = this.data.title;
        card.appendChild(title_el)

        let date_el = document.createElement('h2')
        date_el.innerText = this.data.date;
        card.appendChild(date_el);

        let media_el;
        let image_modal;
        if (this.data.media_type === 'video') {
            media_el = document.createElement('iframe');
            image_modal = document.createElement('iframe')
        } else {
            media_el = document.createElement('img');
            image_modal = document.createElement('img')
        }

        var res;

        res_btns.forEach(function(rad) {
                if (rad.checked) {
                    res = rad.value;
                }
            })
            // Implemented a choice for SD or HD quality of the video and you can get to watch the videos as well
        if (res === 'hd') {
            media_el.setAttribute('src', this.data.hdurl);
            console.log('hfkhhguiuhgfuihgcfghuijhv', res)
        } else {
            media_el.setAttribute('src', this.data.url);
        }

        let media_cont = document.createElement('div');
        media_el.classList.add('round')
            // modal.classList.add('custom_modal-content')
            //media_cont.classList.add('modal');

        media_cont.appendChild(media_el);
        card.appendChild(media_cont);

        let modal = document.createElement('div');
        modal.classList.add('custom_modal');
        image_modal.classList.add('custom_modal-content');
        image_modal.setAttribute('src', this.data.url)
        modal.appendChild(image_modal)
        card.appendChild(modal)

        media_el.addEventListener('click', function() {
            modal.style.display = 'block';
        })

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        })

        let explain_el = document.createElement('p');
        explain_el.innerText = this.data.explanation;
        card.appendChild(explain_el);

        let copyright_el = document.createElement('p');
        copyright_el.innerText = `Copyright: ${this.data.copyright}`;
        card.appendChild(copyright_el);



        // The prepend() method inserts specified content at the beginning of the selected elements _ new Element that I learned in this project 
        // Tip: To insert content at the end of the selected elements, use the append() method which is quite common compared to prepend()
        container.prepend(card);
    }

} // End of the class Constructor the new way of ES6 instead of using Function constructor