{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
    nativeBuildInputs = with pkgs; [
        pkgs.go
        pkgs.hugo
    ];
}
