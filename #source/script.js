let wrapper = document.querySelector('.wrapper');
let matches = document.querySelectorAll(".matches_container button");
let btns = document.querySelectorAll(".btns button");

let attempts = document.querySelector(".attempts span");

let popup = document.querySelector(".popup p");
let modal = document.querySelector(".modal");
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");

let attemptsNum = 3;

matches.forEach(match =>{
    match.addEventListener('click', function(e) {

        attemptsNum--;
        attempts.innerText = attemptsNum;

        let random = Math.floor((Math.random() * 2));

        matches.forEach(m => {
            m.classList.add('up');
        })

        if(random == 0) {
            matches.forEach(m => {
                m.disabled = true;
            })
            
            e.target.setAttribute('src', 'images/matches/1.webp');
            e.target.parentElement.classList.add('active');
            win.classList.add('active');
            setTimeout(() => {
                modal.classList.add('active');
            }, 1600);
            setTimeout(() => {
                modal.classList.add('opacity');
            }, 1700);
        } else {
            makePopup();
        }
        attemptsIsEmpty();
    })
})

btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        attemptsNum--;
        attempts.innerText = attemptsNum;

        matches.forEach(match => {
            match.classList.add('up');
        });
        let random = Math.floor((Math.random() * 2));
        if (index >= 0 && index <= matches.length) {
            let selectedElement = matches[index];
            
            if(random == 0) {
                btns.forEach((btn) => {
                    btn.disabled = true;
                });

                let img = selectedElement.querySelector('img');
                img.setAttribute('src', 'images/matches/1.webp');
                selectedElement.classList.add('active');
                win.classList.add('active');
                setTimeout(() => {
                    modal.classList.add('active');
                }, 1600);
                setTimeout(() => {
                    modal.classList.add('opacity');
                }, 1700);
            } else {
                makePopup();
            }
        };
        attemptsIsEmpty();
    });
});

function makePopup() {
    btns.forEach(btn => {
        btn.disabled = true;
    });
    matches.forEach(m => {
        m.disabled = true;
    })
    setTimeout(() => {
        matches.forEach(match => {
            match.classList.add('remove');
        });
        popup.classList.add('active');
        
    }, 1500)
    setTimeout(() => {
        matches.forEach(match => {
            match.classList.remove('remove');
            match.classList.remove('up');
            match.disabled = false;
        });
        btns.forEach(btn => {
            btn.disabled = false;
        });
        popup.classList.remove('active');
    }, 3000)
};

function attemptsIsEmpty() {
    if(attemptsNum == 0) {
        lose.classList.add('active');
        setTimeout(() => {
            modal.classList.add('active');
        }, 1200);
        setTimeout(() => {
            modal.classList.add('opacity');
        }, 1300);
    }
}

function adaptationElements() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    const aspectClass = aspectRatio >= 1.9
        ? 'modificate1'
        : aspectRatio >= 1.6
            ? 'modificate2'
            : aspectRatio > 1
                ? 'modificate3'
                : 'modificate4';

    wrapper.className = `wrapper ${aspectClass}`;
}

adaptationElements();
window.addEventListener('resize', adaptationElements);