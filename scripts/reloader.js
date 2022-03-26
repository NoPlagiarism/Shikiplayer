// This file is part of Shikiplayer.
//
// Shikiplayer is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
//
// Shikiplayer is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License along with Shikiplayer. If not, see <https://www.gnu.org/licenses/>.
// Copyright 2022 Kaneko Qt

/*import { isAnimePage } from "/scripts/helpers.js";*/

let lastPathname = window.location.pathname;

new MutationObserver(() => {
  const pathname = window.location.pathname;

  if (pathname != lastPathname) {
    lastPathname = pathname;

    if (isAnimePage(pathname)) {
      location.reload(); // Make shikimori reload f@cking page when it changes (҂｀ﾛ´)凸
    }
  }
}).observe(document, { subtree: true, childList: true });
