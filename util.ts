// Copyright 2020 denolib maintainers. MIT license.
// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
const { build, run } = Deno;

// Runs a command in cross-platform way
export function xrun(opts: Deno.RunOptions): Deno.Process {
  return run({
    ...opts,
    args: build.os === "win" ? ["cmd.exe", "/c", ...opts.args] : opts.args
  });
}
