const Themes = {
  default: {
    colors: {
      bgPrimary: 'hsl(234, 22%, 100%)',
      bgSecundary: 'hsl(235, 21%, 100%)',
      border: 'hsl(237, 14%, 74%)',
      borderOpacity: 'hsl(237, 14%, 74%,0.25)',
      font: 'hsl(234, 39%, 25%)',
      hover: 'hsl(236, 33%, 0%)',
      active: 'hsl(220, 98%, 39%)',
      bgMobile: 'bgMobileDefault',
      bgDesk: 'bgDeskDefault',
      boxShadow: 'hsla(280, 85%, 4%, 0.45)',
      gradient: 'linear-gradient(34deg, #57ddff 0%, #c058f3 100%)',
    },
  },
  dark: {
    colors: {
      bgPrimary: 'hsl(234, 22%, 18%)',
      bgSecundary: 'hsl(235, 21%, 12%)',
      border: 'hsl(237, 14%, 26%)',
      font: 'hsl(234, 39%, 90%)',
      hover: 'hsl(236, 33%, 100%)',
      active: 'hsl(220, 98%, 61%)',
      bgMobile: 'bgMobileDesk',
      bgDesk: 'bgDeskDesk',
      borderOpacity: 'hsl(237, 14%, 26%,0.25)',
      boxShadow: 'hsl(280, 86%, 94%,0.25)',
      gradient:
        'linear-gradient(34deg, rgba(87,221,255,1) 0%, rgba(192,88,243,1) 100%)',
    },
  },
};

export { Themes };
