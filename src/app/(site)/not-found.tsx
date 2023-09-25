'use client';
import Link from 'next/link';
import styles from '@/styles/404.module.css';

export default function NotFoundPage() {
  return (
    <section className={styles.body}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-12 ">
          <div className="p-12 md:w-1/2 flex flex-col items-start center">
            {/*Bloc haut*/}
            <div>
              <h2 className="sm:text-3xl font-black uppercase text-9xl mt-4 mb-4">
                Me suis-je perdu ?
              </h2>
              <p className="leading-relaxed mb-2">
                Ne paniquons pas, il peut y avoir plusieurs explications
                possibles :
              </p>
              <ul className="list-disc text-left">
                <li>
                  Vous êtes en avance et le site demandé n’est pas encore là
                </li>
                <li>
                  Vous êtes en retard et vous avez sous les yeux le vestige d’un
                  site passé
                </li>
                <li>
                  Le site est malade et cette page vous accueille pour patienter
                </li>
                <li>
                  On vous a, volontairement ou non, donné une mauvaise adresse
                </li>
              </ul>
            </div>

            {/*Bloc bas*/}
            <div>
              <h2 className="sm:text-3xl font-black uppercase text-9xl mt-2 mb-4">
                Que puis-je faire ?
              </h2>

              <ul className="list-disc text-left">
                <li>
                  Rester ici et recharger la page de temps en temps en gardant
                  espoir
                </li>
                <li>
                  Aller sur
                  <Link href="/" className={styles.a}>
                    {' '}
                    club306
                  </Link>{' '}
                  pour découvrir qui nous sommes
                </li>
                <li>
                  Envoyer un email à{' '}
                  <Link href="mailto:contact@club306" className={styles.a}>
                    contact@club306
                  </Link>{' '}
                  pour râler un bon coup
                </li>
                <li>Redemander l’adresse à votre correspondant</li>
                <li>
                  Essayer toutes les combinaisons d’url possible jusqu’à ce que
                  ça marche
                </li>
              </ul>
            </div>
          </div>

          {/*RIGHT*/}
          <div className="p-12 md:w-1/2 flex flex-col items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              width="708.160"
              height="566.653"
              viewBox="0 0 885.20079 708.31655"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <path
                id="aabd4afe-642c-4327-a3f2-08ec89276309-318"
                data-name="Path 482"
                d="M305.95759,803.97637s-12.753-31.391,25.505-54.934Z"
                transform="translate(-157.39961 -95.84172)"
                fill="#f0f0f0"
                data-darkreader-inline-fill=""
              />
              <path
                id="e302a207-98de-4798-aedc-79a63cff2427-319"
                data-name="Path 483"
                d="M290.27363,803.40533s-3.89-22.374-34-22.182Z"
                transform="translate(-157.39961 -95.84172)"
                fill="#f0f0f0"
                data-darkreader-inline-fill=""
              />
              <path
                id="e16a8a0b-115e-4877-a9d6-27a72cf85b73-320"
                data-name="Path 482"
                d="M732.95759,803.97637s-12.753-31.391,25.505-54.934Z"
                transform="translate(-157.39961 -95.84172)"
                fill="#f0f0f0"
                data-darkreader-inline-fill=""
              />
              <path
                id="b0706b48-08e0-43ea-ab25-36cfaee90c12-321"
                data-name="Path 483"
                d="M717.27363,803.40533s-3.89-22.374-34-22.182Z"
                transform="translate(-157.39961 -95.84172)"
                fill="#f0f0f0"
                data-darkreader-inline-fill=""
              />
              <circle
                cx="565.05368"
                cy="394.03053"
                r="110.8529"
                fill="#f0f0f0"
                data-darkreader-inline-fill=""
              />
              <polygon
                points="565.358 394.03 565.663 394.03 571.145 708.317 559.572 708.317 565.358 394.03"
                fill="#f0f0f0"
                data-darkreader-inline-fill=""
              />
              <circle
                cx="803.05368"
                cy="479.08542"
                r="80.8529"
                fill="#f0f0f0"
                data-darkreader-inline-fill=""
              />
              <polygon
                points="803.276 479.085 803.498 479.085 807.496 708.317 799.055 708.317 803.276 479.085"
                fill="#f0f0f0"
                data-darkreader-inline-fill=""
              />
              <path
                d="M512.72772,575.74828a10.6636,10.6636,0,0,0,8.99946-13.652L552.462,539.92876l-18.40925-6.99159-26.364,22.12251a10.72142,10.72142,0,0,0,5.03894,20.6886Z"
                transform="translate(-157.39961 -95.84172)"
                fill="#ffb6b6"
                data-darkreader-inline-fill=""
              />
              <polygon
                points="332.796 697.353 323.037 697.352 318.394 659.71 332.798 659.71 332.796 697.353"
                fill="#ffb6b6"
                data-darkreader-inline-fill=""
              />
              <path
                d="M492.68433,802.65467l-31.4677-.00116v-.398a12.24876,12.24876,0,0,1,12.24811-12.24791h.00077l19.2194.00078Z"
                transform="translate(-157.39961 -95.84172)"
                fill="#2f2e41"
                data-darkreader-inline-fill=""
              />
              <polygon
                points="258.253 697.353 248.494 697.352 243.852 659.71 258.255 659.71 258.253 697.353"
                fill="#ffb6b6"
                data-darkreader-inline-fill=""
              />
              <path
                d="M418.14189,802.65467l-31.4677-.00116v-.398a12.24876,12.24876,0,0,1,12.2481-12.24791h.00078l19.2194.00078Z"
                transform="translate(-157.39961 -95.84172)"
                fill="#2f2e41"
                data-darkreader-inline-fill=""
              />
              <polygon
                points="265.791 488.031 245.109 601.135 237.875 690.973 261.361 689.818 274.73 602.578 307.96 526.618 317.85 689.608 339.47 689.678 351.103 483.507 265.791 488.031"
                fill="#2f2e41"
                data-darkreader-inline-fill=""
              />
              <path
                d="M511.15006,454.415l-28.9889-11.5343-33.25612,3.805L420.71221,462.271s8.624,108.15764-3.87664,133.52747c0,0,10.016,13.87358,50.82643,10.48683,0,0,39.75312-5.02431,40.73853-18.06008s1.19332-36.737,1.19332-36.737l13.7989-47.55075Z"
                transform="translate(-157.39961 -95.84172)"
                fill="#f07e27"
                data-darkreader-inline-fill=""
              />
              <path
                d="M432.044,464.353l-11.33183-2.082s-12.05733,5.28675-11.93358,21.04064-21.30125,68.5705,4.33154,70.78479S432.044,516.64233,432.044,516.64233Z"
                transform="translate(-157.39961 -95.84172)"
                fill="#f07e27"
                data-darkreader-inline-fill=""
              />
              <path
                d="M501.95577,461.12606l9.19429-6.71109s14.03761,3.17112,19.23007,14.47145c0,0,57.56571,41.74991,41.73193,57.58369s-48.11032,35.3215-48.11032,35.3215l-11.95038-13.53107,29.64882-26.85964-24.323-22.15808Z"
                transform="translate(-157.39961 -95.84172)"
                fill="#f07e27"
                data-darkreader-inline-fill=""
              />
              <path
                d="M487.25519,412.89322a23.79938,23.79938,0,0,1-47.59875,0v-.91349a23.79938,23.79938,0,0,1,47.5805.91349Z"
                transform="translate(-157.39961 -95.84172)"
                fill="#ffb6b6"
                data-darkreader-inline-fill=""
              />
              <path
                d="M467.0732,409.05658c1.52248-.24969,3.17286-.4872,4.537.21315,2.96578,1.51639,2.28371,5.81587,3.90361,8.65377.63944,1.12664,1.67473,2.04621,2.101,3.26419s.16444,2.74046.83432,3.91581c.96831,1.69909,3.59306,1.94877,5.31648.93785a8.45465,8.45465,0,0,0,3.33726-4.7075c.57245-1.61992,1.05354-3.41036,2.436-4.47a5.16406,5.16406,0,0,0,1.33369-1.09009,3.28853,3.28853,0,0,0,.31669-1.86351c0-4.11678-.63944-7.3079.2923-11.29679,1.492-6.43095,2.85617-9.60989-1.86961-14.37829a16.35142,16.35142,0,0,0-8.90345-4.55526c-3.045-.49937-7.52712,3.75139-10.60862,3.654-7.83771-.31059-14.45135-7.56976-21.92369-5.22515a15.4197,15.4197,0,0,0-8.05085,5.92549c-3.65394,5.38348-3.3251,7.46623-2.79528,13.89109a2.37518,2.37518,0,0,0,.408,1.37023c.27406.32886.71861.50547.98656.84041a2.07669,2.07669,0,0,1,.3045,1.49813,10.07846,10.07846,0,0,1-.7247,3.045,1.25445,1.25445,0,0,0-.10962,1.09619,1.10836,1.10836,0,0,0,.609.41411c3.04495,1.09619,6.33352-1.017,9.59161-.96221s6.35178,2.235,9.71342,1.76C461.07465,410.53034,464.08307,409.54986,467.0732,409.05658Z"
                transform="translate(-157.39961 -95.84172)"
                fill="#2f2e41"
                data-darkreader-inline-fill=""
              />
              <path
                d="M466.91564,541.3665a2.839,2.839,0,0,1-.62927.16221l-26.42713,3.689a2.844,2.844,0,0,1-3.0613-1.8043l-22.74754-59.191a2.85615,2.85615,0,0,1,2.044-3.81247l.00014,0,24.852-5.54586a2.27074,2.27074,0,0,0,.55162-.20179l24.17208-12.63793a2.82911,2.82911,0,0,1,.58762-.22869l26.60157-7.0917a2.85071,2.85071,0,0,1,3.402,1.73517l19.83447,51.61088a2.842,2.842,0,0,1-.37523,2.73061l-6.85952,9.21159a2.85239,2.85239,0,0,1-1.26638.96006l-14.991,5.76115a2.255,2.255,0,0,0-.3115.14808L467.312,541.17827A2.85632,2.85632,0,0,1,466.91564,541.3665Z"
                transform="translate(-157.39961 -95.84172)"
                fill="#fff"
                data-darkreader-inline-fill=""
              />
              <path
                d="M479.21094,462.59444l-3.37808.90095-8.95188,2.38755-.016.00366-12.2558,6.40829-4.54822,2.37858-.00212.00081-6.831,3.57118-.18734.0422-7.09623,1.58249-3.42961.76682-13.9882,3.12134,21.95971,57.14092,14.41468-2.01148,3.53438-.49425,7.53322-1.0528.08744-.01126,24.207-13.87392,14.72819-5.66016,6.72448-9.02982-19.11548-49.74007Z"
                transform="translate(-157.39961 -95.84172)"
                fill="#e4e4e4"
                data-darkreader-inline-fill=""
              />
              <rect
                x="420.95351"
                y="481.09788"
                width="78.01578"
                height="3.47642"
                transform="translate(-299.99264 101.29638) rotate(-21.02215)"
                fill="#fff"
                data-darkreader-inline-fill=""
              />
              <rect
                x="425.11051"
                y="491.91473"
                width="78.01578"
                height="3.47642"
                transform="translate(-303.59627 103.50757) rotate(-21.02215)"
                fill="#fff"
                data-darkreader-inline-fill=""
              />
              <rect
                x="433.5076"
                y="513.76471"
                width="78.01578"
                height="3.47642"
                transform="translate(-310.87559 107.97414) rotate(-21.02215)"
                fill="#fff"
                data-darkreader-inline-fill=""
              />
              <polygon
                points="321.811 366.753 343.613 423.483 340.368 424.73 318.433 367.654 321.811 366.753"
                fill="#fff"
                data-darkreader-inline-fill=""
              />
              <polygon
                points="297.21 376.453 292.733 388.91 291.181 393.23 287.56 403.312 286.784 405.467 286.007 407.633 284.985 410.476 277.646 430.901 275.738 425.936 281.722 409.28 283.076 405.509 283.274 404.959 284.875 400.5 286.895 394.878 288.448 390.556 292.659 378.833 292.661 378.832 297.21 376.453"
                fill="#fff"
                data-darkreader-inline-fill=""
              />
              <polygon
                points="278.545 384.028 301.035 442.552 297.501 443.046 275.115 384.795 278.545 384.028"
                fill="#fff"
                data-darkreader-inline-fill=""
              />
              <circle
                cx="273.73095"
                cy="429.7149"
                r="10.35285"
                fill="#ffb6b6"
                data-darkreader-inline-fill=""
              />
              <circle
                cx="701.22511"
                cy="183.97567"
                r="183.97568"
                fill="#e4e4e4"
                data-darkreader-inline-fill=""
              />
              <path
                d="M994.46643,156.93609A183.99,183.99,0,0,1,687.90857,351.65056,183.99152,183.99152,0,1,0,994.46643,156.93609Z"
                transform="translate(-157.39961 -95.84172)"
                opacity="0.1"
              />
              <polygon
                points="700.72 183.975 700.214 183.975 691.116 705.577 710.323 705.577 700.72 183.975"
                fill="#e4e4e4"
                data-darkreader-inline-fill=""
              />
              <path
                d="M992.39961,803.64322h-834a1,1,0,0,1,0-2h834a1,1,0,0,1,0,2Z"
                transform="translate(-157.39961 -95.84172)"
                fill="#cacaca"
                data-darkreader-inline-fill=""
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
