/* GLOBAL CONST */
const d = document;
const w = window;


/* https://criptoya.com/api */
const API = "https://criptoya.com/api/ftx/btc/usd";


/* NODES */
const $logo = d.querySelector('.logo') 
const $aside = d.getElementById('aside')
const $asideMobile = d.getElementById("aside-mobile");
const $asideOptions = d.querySelectorAll('.aside-option')
const $asideOptionsMobile = d.querySelectorAll('.aside-option-mobile')
const $asideOptioneswrapper = d.querySelectorAll(".aside-options-wrapper"
);
const $asideOptioneswrapperMobile = d.querySelectorAll(
  ".aside-mobile .aside-options-wrapper"
);
const $arrowBtn = d.querySelector('.arrow-btn')
const $hamburgerbtn = d.querySelector('.hamburger')
const $backgroundAsideMobile = d.querySelector(".background-aside-mobile"); 
const $main = d.querySelector('main')
const $frontSkillBtn = d.getElementById("front-skills-btn");
const $backSkillBtn = d.getElementById("back-skills-btn");
const $utilsSkillBtn = d.getElementById("utils-skills-btn");
const $frontSkillWrapper = d.querySelector(".front-skills");
const $backSkillWrapper = d.querySelector(".back-skills");
const $utilsSkillWrapper = d.querySelector(".utils-skills");
const $skillSection = d.getElementById("skills");
const $whoAmISection = d.getElementById("whoAmI");
const $projectsSection = d.getElementById('projects')
const $projects = d.querySelectorAll(".project");
const $btcImg = d.querySelector(".btc-img");
const $btcCoin = d.querySelector(".btc-coin");
const $btcPrice = d.querySelector(".btc-price");
const $btcPriceText = d.querySelector(".btc-price-text");


/* ASIDE REDUCE BTN */
$arrowBtn.addEventListener('click', e => {
  $aside.classList.toggle('reduce')
  $arrowBtn.classList.toggle('arrow-btn-rotate')
  $logo.classList.toggle('logo-reduce')
  
  $asideOptions.forEach(el => {
    el.classList.toggle("visibility-opacity");
    el.classList.toggle("reduce-options");
  })
  
  if ($asideOptioneswrapper[0].getAttribute('data-title')) {
    $asideOptioneswrapper[0].removeAttribute("data-title", "Skills");
    $asideOptioneswrapper[1].removeAttribute("data-title", "Who am I?");
    $asideOptioneswrapper[2].removeAttribute("data-title", "Projects");
    $asideOptioneswrapper[3].removeAttribute("data-title", "Linkedin");
    $asideOptioneswrapper[4].removeAttribute("data-title", "Github");
    $asideOptioneswrapper[5].removeAttribute("data-title", "CV");
  } else {
    $asideOptioneswrapper[0].setAttribute('data-title', 'Skills')
    $asideOptioneswrapper[1].setAttribute('data-title', 'Who am I?')
    $asideOptioneswrapper[2].setAttribute('data-title', 'Projects')
    $asideOptioneswrapper[3].setAttribute("data-title", "Linkedin");
    $asideOptioneswrapper[4].setAttribute("data-title", "Github");
    $asideOptioneswrapper[5].setAttribute("data-title", "CV");
  }
})

function titleWhenHoverOpts() {
  if (w.innerWidth < 1401) {
    $asideOptioneswrapper[0].setAttribute("data-title", "Skills");
    $asideOptioneswrapper[1].setAttribute("data-title", "Who am I?");
    $asideOptioneswrapper[2].setAttribute("data-title", "Projects");
    $asideOptioneswrapper[3].setAttribute("data-title", "Linkedin");
    $asideOptioneswrapper[4].setAttribute("data-title", "Github");
    $asideOptioneswrapper[5].setAttribute("data-title", "CV");
  } else {
    $asideOptioneswrapper[0].removeAttribute("data-title", "Skills");
    $asideOptioneswrapper[1].removeAttribute("data-title", "Who am I?");
    $asideOptioneswrapper[2].removeAttribute("data-title", "Projects");
    $asideOptioneswrapper[3].removeAttribute("data-title", "Linkedin");
    $asideOptioneswrapper[4].removeAttribute("data-title", "Github");
    $asideOptioneswrapper[5].removeAttribute("data-title", "CV");
  }
}

titleWhenHoverOpts()
w.addEventListener('resize', e => {
  titleWhenHoverOpts();
})

/* HAMBURGER-BTN */
function HamburgerAndAsideOnOff() {
  $hamburgerbtn.classList.toggle("is-active");
  $asideMobile.classList.toggle("leftToRightAsideMobile");
  $backgroundAsideMobile.classList.toggle("hidden");
}

d.addEventListener('click', e => {
  if (e.target.matches('.hamburger') || e.target.matches(`${'.hamburger'} *`) ) {
    HamburgerAndAsideOnOff();
  }
})

$backgroundAsideMobile.addEventListener('click', e => {
  HamburgerAndAsideOnOff();
})


/* ANCHOR ASIDE-OPTIONS-BTN */
$asideOptioneswrapperMobile[0].addEventListener("click", (e) => {
  e.preventDefault()
  $main.scrollTo(0, 0);
  let skillSectionAnchor = $skillSection.getBoundingClientRect().top - 60;
  HamburgerAndAsideOnOff();
  $main.scrollTo(0, skillSectionAnchor);
});

$asideOptioneswrapperMobile[1].addEventListener("click", (e) => {
  e.preventDefault();
  $main.scrollTo(0, 0);
  let whoAmISectionAnchor = $whoAmISection.getBoundingClientRect().top - 60;
  HamburgerAndAsideOnOff();
  $main.scrollTo(0, whoAmISectionAnchor);
});

$asideOptioneswrapperMobile[2].addEventListener("click", (e) => {
  e.preventDefault();
  $main.scrollTo(0, 0);
  let projectsSectionAnchor = $projectsSection.getBoundingClientRect().top - 60;
  HamburgerAndAsideOnOff();
  $main.scrollTo(0, projectsSectionAnchor);
});

$asideOptioneswrapperMobile[3].addEventListener("click", (e) => {
  HamburgerAndAsideOnOff();
});

$asideOptioneswrapperMobile[4].addEventListener("click", (e) => {
  HamburgerAndAsideOnOff();
});

$asideOptioneswrapperMobile[5].addEventListener("click", (e) => {
  HamburgerAndAsideOnOff();
});


if (w.innerWidth > 950) {
  $asideOptioneswrapper[0].addEventListener("click", (e) => {
    $main.scrollTo(0, 0);
    let skillSectionAnchor = $skillSection.getBoundingClientRect().top;
    $main.scrollTo(0, skillSectionAnchor);
  });
  
  $asideOptioneswrapper[1].addEventListener("click", (e) => {
    $main.scrollTo(0, 0);
    let whoAmISectionAnchor = $whoAmISection.getBoundingClientRect().top;
    $main.scrollTo(0, whoAmISectionAnchor);
  });
  
  $asideOptioneswrapper[2].addEventListener("click", (e) => {
    $main.scrollTo(0, 0);
    let projectsSectionAnchor = $projectsSection.getBoundingClientRect().top;
    $main.scrollTo(0, projectsSectionAnchor);
  });
  
  $asideOptioneswrapper[3].addEventListener("click", (e) => {
    e.preventDefault()
    w.open("https://www.linkedin.com/in/alejandro-calderon-b527a1168/");
  });

  $asideOptioneswrapper[4].addEventListener("click", (e) => {
    e.preventDefault();
    w.open("https://github.com/Alejoprin/");
  });

  $asideOptioneswrapper[5].addEventListener("click", (e) => {
    e.preventDefault();
    w.open("#");
  });
}


/* SKILLS */
$frontSkillBtn.addEventListener("click", (e) => {
  $frontSkillWrapper.classList.remove("display-none");
  $backSkillWrapper.classList.add("display-none");
  $utilsSkillWrapper.classList.add("display-none");
  $frontSkillBtn.classList.remove("skills-change-color");
  $backSkillBtn.classList.add("skills-change-color");
  $utilsSkillBtn.classList.add("skills-change-color");
});

$backSkillBtn.addEventListener("click", (e) => {
  $frontSkillWrapper.classList.add("display-none");
  $backSkillWrapper.classList.remove("display-none");
  $utilsSkillWrapper.classList.add("display-none");
  $frontSkillBtn.classList.add("skills-change-color");
  $backSkillBtn.classList.remove("skills-change-color");
  $utilsSkillBtn.classList.add("skills-change-color");
});

$utilsSkillBtn.addEventListener("click", (e) => {
  $frontSkillWrapper.classList.add("display-none");
  $backSkillWrapper.classList.add("display-none");
  $utilsSkillWrapper.classList.remove("display-none");
  $frontSkillBtn.classList.add("skills-change-color");
  $backSkillBtn.classList.add("skills-change-color");
  $utilsSkillBtn.classList.remove("skills-change-color");
});


/* SCROLL ADD SECTIONS */
d.addEventListener("DOMContentLoaded", (e) => {
  w.scrollTo(0, 0);

  intersectionSections();
});

function intersectionSections() {
  const $sections = d.querySelectorAll("section");

  const cb = (entries) => {
    entries.forEach((entry) => {
      function intersectingAndStyle(el, style) {
        if (entry.target === el && entry.isIntersecting)
          el.classList.add(style);
      }

      intersectingAndStyle($skillSection, "toUpSectionAnimate");
      intersectingAndStyle($whoAmISection, "toVisibilitySectionAnimate");
      intersectingAndStyle($projects[0], "toRightSectionAnimate");
      intersectingAndStyle($projects[1], "toLeftSectionAnimate");
      intersectingAndStyle($projects[2], "toRightSectionAnimate");
    });
  };

  let observer = new IntersectionObserver(cb, { threshold: [0.5, 0.75] });
  $sections.forEach((el) => observer.observe(el));
  $projects.forEach((el) => observer.observe(el));
}


/* API-REST */ /* BTC-PRICE */
setTimeout(() => {
  $btcCoin.addEventListener('click', e => {
    $btcCoin.classList.add('pause-animation')
    $btcPrice.classList.remove("hidden");

    fetch(API)
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        let total = new Intl.NumberFormat("es-ES", {
          minimumIntegerDigits: 4,
          maximumFractionDigits: 0,
          minimumFractionDigits: 0,
        }).format(json.ask);
      
        $btcPriceText.textContent = `Bitcoin $${total}`;
      })
      .catch((err) => console.log(err));    
    
    setTimeout(() => {
      $btcPrice.classList.add("hidden")
      $btcCoin.classList.remove("pause-animation");
    }, 3000);
  })
}, 3000)
