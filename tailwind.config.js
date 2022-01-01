module.exports = {
  content: ["./src/**/*.{html,js,jsx,astro}"],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'andika': ['Andika', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [{"blossom":{"primary":"#c91f5d","primary-focus":"#a91b50","primary-content":"#ffffff","secondary":"#a68df6","secondary-focus":"#8462f3","secondary-content":"#ffffff","accent":"#84a92a","accent-focus":"#5e791e","accent-content":"#ffffff","neutral":"#3e2318","neutral-focus":"#271710","neutral-content":"#f0d6e8","base-100":"#cea69f","base-200":"#b87e74","base-300":"#74433a","base-content":"#251217","info":"#1c92f2","success":"#009485","warning":"#ff9900","error":"#ff5724","--rounded-box":"1rem","--rounded-btn":"1.9rem","--rounded-badge":"1.9rem","--animation-btn":".25s","--animation-input":".2s","--btn-text-case":"uppercase","--navbar-padding":".5rem","--border-btn":"1px"},"darkforest":{"primary":"#1eb854","primary-focus":"#188c40","primary-content":"#ffffff","secondary":"#20d55f","secondary-focus":"#18aa4b","secondary-content":"#ffffff","accent":"#d99330","accent-focus":"#b57721","accent-content":"#ffffff","neutral":"#2a2e37","neutral-focus":"#16181d","neutral-content":"#ffffff","base-100":"#3d4451","base-200":"#2a2e37","base-300":"#16181d","base-content":"#ffffff","info":"#66c7ff","success":"#87cf3a","warning":"#e1d460","error":"#ff6b6b"}},
        'light',
        'dark',
        'cupcake',
        'bumblebee',
        'emerald',
        'corporate',
        'synthwave',
        'retro',
        'cyberpunk',
        'valentine',
        'halloween',
        'garden',
        'forest',
        'aqua',
        'lofi',
        'pastel',
        'fantasy',
        'wireframe',
        'black',
        'luxury',
        'dracula',
        'cmyk'
    ],
  },

}