import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --bg-primary:    #080e1a;
    --bg-card:       #0d1928;
    --bg-card-hover: #122035;
    --bg-input:      rgba(255, 255, 255, 0.04);

    --blue:          #4580ff;
    --blue-dim:      rgba(69, 128, 255, 0.11);
    --blue-border:   rgba(69, 128, 255, 0.30);
    --blue-hover:    rgba(69, 128, 255, 0.18);

    --text-primary:   #f0f4ff;
    --text-secondary: #7a9abb;
    --text-dim:       #3d6080;

    --border:         rgba(255, 255, 255, 0.07);
    --border-strong:  rgba(255, 255, 255, 0.13);

    --green:          #22c55e;
    --green-dim:      rgba(34, 197, 94, 0.12);
    --green-border:   rgba(34, 197, 94, 0.28);

    --red:            #ef4444;
    --amber:          #f59e0b;

    --dock-bg:        #101827;
    --dock-border:    rgba(255, 255, 255, 0.10);
    --dock-icon:      #fff;

    --font:           'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

.light-theme{
    --primary-color: #2563eb;
    --primary-color-light: #3b82f6;
    --secondary-color: #ff7675;
    --secondary-color-2: rgb(150, 162, 188);
    --text-color: #dae4fb;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;

    --bg-primary:    #eef2f9;
    --bg-card:       #ffffff;
    --bg-card-hover: #f4f7ff;
    --bg-input:      rgba(0, 0, 0, 0.04);

    --blue:          #3366ff;
    --blue-dim:      rgba(51, 102, 255, 0.09);
    --blue-border:   rgba(51, 102, 255, 0.28);
    --blue-hover:    rgba(51, 102, 255, 0.14);

    --text-primary:   #0f172a;
    --text-secondary: #4a5568;
    --text-dim:       #8a9bb0;

    --border:         rgba(0, 0, 0, 0.08);
    --border-strong:  rgba(0, 0, 0, 0.14);

    --green:          #16a34a;
    --green-dim:      rgba(22, 163, 74, 0.10);
    --green-border:   rgba(22, 163, 74, 0.25);

    --dock-bg:        #F8FAFF;
    --dock-border:    rgba(0, 0, 0, 0.10);
    --dock-icon:      #4580ff;
}
.dark-theme{
    --primary-color-2: #00eaff;
    --primary-color: #2563eb;
    --primary-color-light: #3b82f6;
    --secondary-color: #6c757d;
    --secondary-color-2: rgb(150, 162, 188);
    --text-color: #dae4fb;
    --background-dark-color: #0F172A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1rem;
    transition: all .4s ease-in-out;
    
}

html{
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body{
    font-family: var(--font);
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: all .4s ease-in-out;
}

body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}

textarea{
    max-width: 100%;
}
a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}

h1{
    font-size: 4rem;
    color: var(--white-color);
    span{
        font-size: 4rem;
        @media screen and (max-width: 502px){
            font-size: 3rem
        }
    }
    @media screen and (max-width: 502px){
        font-size: 3rem
    }
}

span{
    color: var(--primary-color);
}
h6{
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom: .6rem;
}

//Utilities
.u-margin-bottom{
    margin-bottom: 4rem;
}


//Floting Toggler
.light-dark-mode{
    position: fixed;
    right: 0;
    top: 50%;
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
    @media screen and (max-width: 1000px) {
        transform: scale(0.8);
        right: -12px;
    }
  }

  //Nav Toggler
  .ham-burger-menu{
      position: absolute;
      right: 5%;
      top: 3%; 
      display: none;
      z-index: 15;
      svg{
          font-size: 3rem;
      }
    }

    .nav-toggle{
        transform: translateX(0);
        z-index: 20;
    }
  @media screen and (max-width:1200px){
    .ham-burger-menu{
        display: block;
    }
  }


//Global Media Queries


  /* ── Keyframe animations (global, referenced by styled-components) ──────── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.45; }
  }

  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.96); }
    to   { opacity: 1; transform: scale(1); }
  }

  @keyframes barFill {
    from { width: 0; }
  }

`;

export default GlobalStyle;
