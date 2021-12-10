module.exports = {
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
        {"blossom":{"primary":"#c91f5d","primary-focus":"#a91b50","primary-content":"#ffffff","secondary":"#a68df6","secondary-focus":"#8462f3","secondary-content":"#ffffff","accent":"#84a92a","accent-focus":"#5e791e","accent-content":"#ffffff","neutral":"#3e2318","neutral-focus":"#271710","neutral-content":"#f0d6e8","base-100":"#cea69f","base-200":"#b87e74","base-300":"#74433a","base-content":"#251217","info":"#1c92f2","success":"#009485","warning":"#ff9900","error":"#ff5724","--rounded-box":"1rem","--rounded-btn":"1.9rem","--rounded-badge":"1.9rem","--animation-btn":".25s","--animation-input":".2s","--btn-text-case":"uppercase","--navbar-padding":".5rem","--border-btn":"1px"}},
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