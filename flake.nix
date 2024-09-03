{
  description = "Bun development environment";

  inputs.nixpkgs.url = "https://flakehub.com/f/NixOS/nixpkgs/*.tar.gz";

  outputs = {
    self,
    nixpkgs,
  }: let
    overlays = [
      (final: prev: {
        bun = prev.bun;
      })
    ];

    supportedSystems = ["x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin"];
    forEachSupportedSystem = f:
      nixpkgs.lib.genAttrs supportedSystems (system:
        f {
          pkgs = import nixpkgs {inherit overlays system;};
        });
  in {
    devShells = forEachSupportedSystem ({pkgs}: {
      packages = with pkgs; [
        node2nix
        bun
        nodePackages."@astrojs/language-server"
        yaml-language-server
      ];
    });
  };
}
