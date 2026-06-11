export const HorseSVG = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 400 520"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
  >
    <defs>
      <linearGradient id="hg" x1="0.4" y1="0" x2="0.6" y2="1">
        <stop offset="0%" stopColor="#FFDF00" />
        <stop offset="42%" stopColor="#F18500" />
        <stop offset="100%" stopColor="#E8362D" />
      </linearGradient>
    </defs>

    {/* Tail */}
    <path
      d="M 78 298 C 55 310 38 332 32 358 C 26 382 32 408 48 420
         C 38 406 38 380 46 357 C 54 334 70 316 88 308 Z"
      fill="url(#hg)"
    />

    {/* Body (torso) */}
    <ellipse cx="198" cy="285" rx="130" ry="75" fill="url(#hg)" transform="rotate(-6 198 285)" />

    {/* Rump extension */}
    <ellipse cx="102" cy="272" rx="62" ry="58" fill="url(#hg)" />

    {/* Chest extension */}
    <ellipse cx="302" cy="268" rx="55" ry="60" fill="url(#hg)" />

    {/* Neck */}
    <path
      d="M 285 215 C 295 192 312 172 330 160 C 344 150 358 152 364 164
         C 370 176 364 192 350 200 C 344 186 332 183 322 192
         C 313 200 314 216 320 226 L 295 235 Z"
      fill="url(#hg)"
    />

    {/* Mane flowing backward — upper wave */}
    <path
      d="M 330 158 C 312 136 290 122 268 118 C 252 115 240 122 240 134
         C 248 130 260 135 262 148 C 270 134 284 135 288 150 Z"
      fill="url(#hg)"
    />
    {/* Mane — lower wave */}
    <path
      d="M 320 167 C 303 148 280 137 258 135
         C 244 134 234 142 236 154 C 244 150 256 155 258 168 Z"
      fill="url(#hg)"
      opacity="0.85"
    />
    {/* Mane — extra flow */}
    <path
      d="M 308 175 C 290 156 268 148 248 148
         C 234 148 224 156 228 168 C 236 163 248 168 250 180 Z"
      fill="url(#hg)"
      opacity="0.7"
    />

    {/* Head */}
    <ellipse cx="358" cy="155" rx="40" ry="29" fill="url(#hg)" transform="rotate(22 358 155)" />

    {/* Muzzle */}
    <ellipse cx="382" cy="170" rx="23" ry="15" fill="url(#hg)" transform="rotate(15 382 170)" />

    {/* Ear */}
    <polygon points="340,136 350,112 364,130" fill="url(#hg)" />

    {/* Hind left leg (far — slightly transparent) */}
    <path
      d="M 88 318 L 82 368 L 78 412 L 78 440 C 78 448 84 453 92 451
         L 106 451 C 114 449 116 441 114 432 L 112 406 L 113 368 L 116 318 Z"
      fill="url(#hg)"
      opacity="0.65"
      transform="rotate(2 97 318)"
    />

    {/* Hind right leg (near) */}
    <path
      d="M 118 322 L 113 372 L 110 415 L 110 443 C 110 451 116 456 124 454
         L 138 454 C 146 452 147 444 146 435 L 144 409 L 144 372 L 146 322 Z"
      fill="url(#hg)"
      transform="rotate(-1.5 128 322)"
    />

    {/* Front left leg (far — slightly transparent) */}
    <path
      d="M 284 318 L 278 368 L 274 412 L 274 438 C 274 446 280 451 288 449
         L 302 449 C 310 447 311 439 309 430 L 307 404 L 308 368 L 310 318 Z"
      fill="url(#hg)"
      opacity="0.65"
      transform="rotate(2 293 318)"
    />

    {/* Front right leg (near) */}
    <path
      d="M 312 315 L 306 365 L 303 408 L 303 437 C 303 445 309 449 317 447
         L 331 447 C 339 445 340 437 338 428 L 336 401 L 337 365 L 338 315 Z"
      fill="url(#hg)"
      transform="rotate(-1 323 315)"
    />

    {/* Eye */}
    <circle cx="356" cy="148" r="5.5" fill="#1A0800" />
    <circle cx="354" cy="146" r="2" fill="#FFE066" opacity="0.6" />

    {/* Nostril */}
    <ellipse cx="386" cy="175" rx="5.5" ry="3.5" fill="#8B2500" opacity="0.55" />
  </svg>
)
