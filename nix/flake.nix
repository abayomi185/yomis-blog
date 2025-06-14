{
  description = "Yomi's blog development environment";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = {
    self,
    nixpkgs,
  }: let
    overlays = [];

    supportedSystems = ["x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin"];
    forEachSupportedSystem = f:
      nixpkgs.lib.genAttrs supportedSystems (system:
        f {
          pkgs = import nixpkgs {inherit overlays system;};
        });
  in {
    devShells = forEachSupportedSystem ({pkgs}: {
      default = pkgs.mkShell {
        packages = with pkgs;
          [
            astro-language-server
          ]
          ++ [
            (pkgs.writeShellScriptBin "npm" ''
              pnpm "$@"
            '')
            (pkgs.writeShellScriptBin "npx" ''
              pnpx "$@"
            '')
          ];
      };
    });
  };
}
