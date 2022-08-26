import {AfterViewInit, Component, OnInit} from "@angular/core";
import {
  MoveDirection,
  ClickMode,
  HoverMode,
  OutMode,
  Engine,
  Container,
  Interactivity,
  InteractivityDetect, DivType, CollisionMode, DestroyMode, DestroyType, StartValueType, RotateDirection, BackgroundMask
} from "tsparticles-engine";
// @ts-ignore
import {loadFull} from "tsparticles";

@Component({
  selector: "album-pokemon-animation",
  templateUrl: "album-pokemon-animation.component.html",
  styleUrls: ["album-pokemon-animation.component.scss"]
})
export class AlbumPokemonAnimationComponent implements OnInit, AfterViewInit {
  constructor() {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "";

  /* or the classic JavaScript object */
  particlesOptions  = {
    autoPlay: true,
    background: {
      color: {
        value: "#fff"
      },
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
      opacity: 1
    },
    // backgroundMask: {
    //   composite: BackgroundMask,
    //   cover: {
    //     color: {
    //       value: "#fff"
    //     },
    //     opacity: 1
    //   },
    //   enable: false
    // },
    fullScreen: {
      enable: false,
      zIndex: 1,
    },
    detectRetina: true,
    duration: 0,
    fpsLimit: 120,
    interactivity: {
      detectsOn: InteractivityDetect.window,
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push
        },
        onDiv: {
          selectors: "#repulse-div",
          enable: false,
          mode: "repulse",
          type: DivType.circle
        },
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 60,
            smooth: 10
          }
        },
        resize: true
      },
      modes: {
        slow: {
          factor: 3,
          radius: 200
        },
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 1,
          maxSpeed: 50,
          speed: 1
        },
        bounce: {
          distance: 200
        },
        bubble: {
          distance: 400,
          duration: 2,
          mix: false,
          opacity: 0.8,
          size: 40,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: []
          }
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5
          },
          radius: 60
        },
        grab: {
          distance: 400,
          links: {
            blink: false,
            consent: false,
            opacity: 1
          }
        },
        push: {
          default: true,
          groups: [],
          quantity: 4
        },
        remove: {
          quantity: 2
        },
        repulse: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          divs: {
            distance: 200,
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            selectors: []
          }
        },
        trail: {
          delay: 1,
          pauseOnStop: false,
          quantity: 1
        },
        light: {
          area: {
            gradient: {
              start: {
                value: "#ffffff"
              },
              stop: {
                value: "#000000"
              }
            },
            radius: 1000
          },
          shadow: {
            color: {
              value: "#000000"
            },
            length: 2000
          }
        }
      }
    },
    manualParticles: [],
    motion: {
      disable: false,
      reduce: {
        factor: 4,
        value: true
      }
    },
    particles: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1
          },
          value: 1
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1
          },
          value: 1
        }
      },
      collisions: {
        bounce: {
          horizontal: {
            random: {
              enable: false,
              minimumValue: 0.1
            },
            value: 1
          },
          vertical: {
            random: {
              enable: false,
              minimumValue: 0.1
            },
            value: 1
          }
        },
        enable: false,
        mode: CollisionMode.bounce,
        overlap: {
          enable: true,
          retries: 0
        }
      },
      color: {
        value: "#ffffff",
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            decay: 0,
            sync: true
          }
        }
      },
      destroy: {
        mode: DestroyMode.none,
        split: {
          count: 1,
          factor: {
            random: {
              enable: false,
              minimumValue: 0
            },
            value: 3
          },
          rate: {
            random: {
              enable: false,
              minimumValue: 0
            },
            value: {
              min: 4,
              max: 9
            }
          },
          sizeOffset: true
        }
      },
      groups: {},
      move: {
        angle: {
          offset: 0,
          value: 90
        },
        attract: {
          distance: 200,
          enable: false,
          rotate: {
            x: 600,
            y: 1200
          }
        },
        center: {
          x: 50,
          y: 50,
          radius: 0
        },
        decay: 0,
        distance: {},
        direction: MoveDirection.none,
        drift: 0,
        enable: true,
        gravity: {
          acceleration: 9.81,
          enable: false,
          inverse: false,
          maxSpeed: 50
        },
        path: {
          clamp: true,
          delay: {
            random: {
              enable: false,
              minimumValue: 0
            },
            value: 0
          },
          enable: false,
          options: {}
        },
        outModes: {
          default: OutMode.out,
          bottom: OutMode.out,
          left: OutMode.out,
          right: OutMode.out,
          top: OutMode.out
        },
        random: false,
        size: false,
        speed: 2,
        spin: {
          acceleration: 0,
          enable: false
        },
        straight: false,
        trail: {
          enable: false,
          length: 10,
          fillColor: {
            value: "#000000"
          }
        },
        vibrate: false,
        warp: false
      },
      number: {
        density: {
          enable: true,
          area: 800,
          factor: 1000
        },
        limit: 0,
        value: 80
      },
      opacity: {
        random: {
          enable: true,
          minimumValue: 0.1
        },
        value: {
          min: 0.1,
          max: 1
        },
        animation: {
          count: 0,
          enable: true,
          speed: 1,
          decay: 0,
          sync: false,
          destroy: DestroyType.none,
          startValue: StartValueType.random,
          minimumValue: 0.2
        }
      },
      reduceDuplicates: false,
      rotate: {
        random: {
          enable: true,
          minimumValue: 0
        },
        value: 0,
        animation: {
          enable: true,
          speed: 5,
          decay: 0,
          sync: false
        },
        direction: RotateDirection.random,
        path: false
      },
      shadow: {
        blur: 0,
        color: {
          value: "#000"
        },
        enable: false,
        offset: {
          x: 0,
          y: 0
        }
      },
      shape: {
        options: {
          character: {
            fill: false,
            font: "Verdana",
            style: "",
            value: "*",
            weight: 400
          },
          char: {
            fill: false,
            font: "Verdana",
            style: "",
            value: "*",
            weight: "400"
          },
          polygon: {
            sides: 5
          },
          star: {
            sides: 5
          },
          image: [
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png",
              width: 32,
              height: 32
            }
          ],
          images: [
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png",
              width: 32,
              height: 32
            },
            {
              src: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png",
              width: 32,
              height: 32
            }
          ]
        },
        type: "image",
      },
      size: {
        random: {
          enable: false,
          minimumValue: 1
        },
        value: 16,
        animation: {
          count: 0,
          enable: false,
          speed: 40,
          decay: 0,
          sync: false,
          destroy: DestroyType.none,
          startValue: StartValueType.random,
          minimumValue: 0.1
        }
      },
      stroke: {
        width: 0,
        color: {
          value: "#000000",
          animation: {
            h: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              decay: 0,
              sync: true
            },
            s: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              decay: 0,
              sync: true
            },
            l: {
              count: 0,
              enable: false,
              offset: 0,
              speed: 1,
              decay: 0,
              sync: true
            }
          }
        }
      },
      zIndex: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        opacityRate: 1,
        sizeRate: 1,
        velocityRate: 1
      },
      life: {
        count: 0,
        delay: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0,
          sync: false
        },
        duration: {
          random: {
            enable: false,
            minimumValue: 0.0001
          },
          value: 0,
          sync: false
        }
      },
      roll: {
        darken: {
          enable: false,
          value: 0
        },
        enable: false,
        enlighten: {
          enable: false,
          value: 0
        },
        mode: "vertical",
        speed: 25
      },
      tilt: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        animation: {
          enable: false,
          speed: 0,
          decay: 0,
          sync: false
        },
        direction: RotateDirection.clockwise,
        enable: false
      },
      twinkle: {
        lines: {
          enable: false,
          frequency: 0.05,
          opacity: 1
        },
        particles: {
          enable: false,
          frequency: 0.05,
          opacity: 1
        }
      },
      wobble: {
        distance: 5,
        enable: false,
        speed: {
          angle: 50,
          move: 10
        }
      },
      orbit: {
        animation: {
          count: 0,
          enable: false,
          speed: 1,
          decay: 0,
          sync: false
        },
        enable: false,
        opacity: 1,
        rotation: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 45
        },
        width: 1
      },
      links: {
        blink: false,
        color: {
          value: "#000"
        },
        consent: false,
        distance: 150,
        enable: false,
        frequency: 1,
        opacity: 0.4,
        shadow: {
          blur: 5,
          color: {
            value: "#000"
          },
          enable: false
        },
        triangles: {
          enable: false,
          frequency: 1
        },
        width: 1,
        warp: false
      },
      repulse: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        enabled: false,
        distance: 1,
        duration: 1,
        factor: 1,
        speed: 1
      }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    responsive: [

    ],
    style: {
      width:"100vw",
      height:"100vh"
    },
    themes: [],
    zLayers: 100
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }

}
