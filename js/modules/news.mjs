


export class News {
    constructor(titulo, img, alt, fecha, href) {
        this.img = img;
        this.alt = alt;
        this.titulo = titulo;
        this.fecha = fecha;
        this.href = href;
    }

    create(parent) {

        
        let liElem = document.createElement('li');
        let newsWrapper = document.createElement('div');
        let dateElem = document.createElement('h4');
        let titleElem = document.createElement('h3');
        let imgElem = document.createElement('img');
        let aElem = document.createElement('a');

        liElem.classList.add('splide__slide');
        newsWrapper.classList.add('splide__newsContainer');
        imgElem.src = this.img;
        imgElem.alt = this.alt;
        titleElem.innerHTML = this.titulo;
        dateElem.innerHTML = this.fecha;
        aElem.href = this.href;
        aElem.innerHTML = "READ MORE";

        parent.appendChild(liElem);
        liElem.appendChild(newsWrapper);
        newsWrapper.append(imgElem, dateElem, titleElem, aElem);

    }
}

export class NewsFeed {
    constructor(news, parent) {
        this.news = news;
        this.parent = parent;
        this.created = false;
    }


    create() {

        if (this.created) {
            console.log('News Feed already created');
            return;
        } else {

            let head = document.getElementsByTagName('HEAD')[0];
            
            let link = document.createElement('link');
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'js/modules/news.css';



            head.append( link);

            




            let section = document.createElement('section');
            let track = document.createElement('div');
            let list = document.createElement('ul');

            this.parent.appendChild(section);
            section.appendChild(track);
            track.appendChild(list);



            section.classList.add('splide');
            section.id = 'image-carousel';

            track.classList.add('splide__track');

            list.classList.add('splide__list');

            this.news.map(e => e.create(list));

            new Splide('#image-carousel', {
                arrows: false,  //no display of arrows 
                perPage: 3,     //on media > 1000 shows all 3 slides, acting like 3 columns 
                pagination: false, //no diplay of dots
                mediaQuery: 'max',
                height: '406px',
                breakpoints: {
                    1000: {
                        perPage: 1, //on media < 1000 shows only 1 slide per page. 
                    }
                }
            }).mount();

            this.created = true;

        }





    }
}








