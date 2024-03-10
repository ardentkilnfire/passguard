# Contributing to PassGuard

Thank you for considering contributing to PassGuard! Contributions are welcome and appreciated.

## Ways to Contribute

- Report bugs or suggest features by opening issues.
- Fix bugs or implement new features by creating pull requests.

## Getting Started

1. Fork the repository.
2. Clone the forked repository to your local machine.
3. Make your changes.
4. Commit your changes and push them to your fork.
5. Open a pull request in the **dev** branch of the repository.

## Setting up the Project
To set up the PassGuard project on your local machine, follow these steps:

1. **Install Tauri Dependencies**: PassGuard utilizes Tauri, so make sure to visit [Tauri's Prerequisite Webpage](https://beta.tauri.app/guides/prerequisites) and follow the instructions to set up the Tauri development environment suitable for your operating system.
2. **Install Project Dependencies**: PassGuard uses `pnpm` for managing dependencies. Run `pnpm i` to install all necessary dependencies.
3. **Run the Project**: Start the PassGuard project in development mode or locally by running `pnpm tauri dev`.

## Building for Desktop

To generate desktop application binaries for PassGuard, the following steps use Docker to streamline the build process. Follow these instructions:

1. Navigate to the `desktop` directory in your PassGuard project.

2. Run the following command in your terminal:

   ```bash
   docker-compose -f docker-compose.build.yml up
   ```

   This command triggers the build process for the application binaries.

3. Once the build is completed, check the `dist` directory within the `desktop` directory. You will find the following sub-directories:

   - `appimage`: Contains the AppImage format for Linux distributions.
   - `deb`: Holds the Debian package for Debian-based Linux distributions.
   - `rpm`: Contains the RPM package for Red Hat-based Linux distributions.
   - `nsis`: Holds the NSIS installer for Windows.

Please note that PassGuard currently supports Windows and Linux platforms.

### Thank you for your contributions!
