
# Tab Content Copier

This Chrome extension allows you to copy the content of all tabs in the current window, including the page's title, the current timestamp, and the URL to your clipboard with a single click.

## Installation

1. Clone or download the `TabContentCopier` directory.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable Developer Mode by clicking the toggle switch next to "Developer mode".
4. Click the "Load unpacked" button and select the `TabContentCopier` directory.

## Usage

Click on the extension icon in your browser toolbar to copy the content of all open tabs in the current window to your clipboard.

## Packaging with Gradle

To package this extension into a zip file using Gradle, follow these steps:

1. Ensure Gradle is installed on your system.
2. Navigate to the root directory of this extension.
3. Run `gradle shadowJar` to create a zip file of the extension.

The zip file will be located in the `build/libs` directory.

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

## Author

Rafael de Medeiros Borja Gomes - [rafaelborja](https://github.com/rafaelborja)
