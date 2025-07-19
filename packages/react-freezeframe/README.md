# React Freezeframe

[![npm version](https://badge.fury.io/js/react-freezeframe-vite.svg)](https://badge.fury.io/js/react-freezeframe-vite)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

**Modernized React wrapper for freezeframe.js** - Built with Vite and ES Modules for modern React applications.

React Freezeframe is a React component that automatically pauses animated GIFs and enables them to start animation on mouse hover, click, or touch events.

## ✨ Features

- **Modern Build System**: Built with Vite for optimal performance
- **ES Modules**: Full ESM support for modern bundlers
- **TypeScript Ready**: Built with TypeScript for better developer experience
- **React 17+ Compatible**: Works with React 17, 18, and 19
- **Vite Compatible**: Optimized for Vite-based applications
- **Lightweight**: Minimal bundle size with tree-shaking support
- **Responsive**: Built-in responsive design support
- **Accessible**: Proper ARIA attributes and keyboard support

## 🚀 Installation

```bash
npm install react-freezeframe-vite
```

**Peer Dependencies:**
- `react` >= 17.0.0
- `react-dom` >= 17.0.0  
- `freezeframe` >= 5.0.0

## 📖 Usage

### Basic Usage

```jsx
import ReactFreezeframe from 'react-freezeframe-vite';

function App() {
  return (
    <div>
      <h1>My App</h1>
      <ReactFreezeframe
        src="path/to/animated.gif"
        alt="Animated GIF"
        options={{
          trigger: 'hover',
          overlay: true,
          responsive: true
        }}
      />
    </div>
  );
}
```

### Advanced Usage

```jsx
import ReactFreezeframe from 'react-freezeframe-vite';

function AdvancedExample() {
  const handleStart = (items, isPlaying) => {
    console.log('GIF started playing:', isPlaying);
  };

  const handleStop = (items, isPlaying) => {
    console.log('GIF stopped playing:', isPlaying);
  };

  const handleToggle = (items, isPlaying) => {
    console.log('GIF toggled:', isPlaying);
  };

  return (
    <div>
      {/* Single GIF with custom options */}
      <ReactFreezeframe
        src="logo.gif"
        alt="Company Logo"
        options={{
          trigger: 'click',
          overlay: true,
          responsive: false,
          warnings: false
        }}
        onStart={handleStart}
        onStop={handleStop}
        onToggle={handleToggle}
      />

      {/* Multiple GIFs as children */}
      <ReactFreezeframe
        options={{
          trigger: 'hover',
          overlay: false,
          responsive: true
        }}
      >
        <img src="gif1.gif" alt="First GIF" />
        <img src="gif2.gif" alt="Second GIF" />
        <img src="gif3.gif" alt="Third GIF" />
      </ReactFreezeframe>
    </div>
  );
}
```

## 🎮 Control Methods

### 1. Automatic Triggers

#### Hover Trigger (Default)
```jsx
<ReactFreezeframe
  src="animation.gif"
  options={{ trigger: 'hover' }}
/>
```

#### Click Trigger
```jsx
<ReactFreezeframe
  src="animation.gif"
  options={{ trigger: 'click' }}
/>
```

#### No Automatic Trigger (Manual Control Only)
```jsx
<ReactFreezeframe
  src="animation.gif"
  options={{ trigger: false }}
/>
```

### 2. Manual Control with Refs

```jsx
import { useRef } from 'react';
import ReactFreezeframe from 'react-freezeframe-vite';

function ManualControlExample() {
  const freezeframeRef = useRef();

  const startAnimation = () => {
    freezeframeRef.current?.start();
  };

  const stopAnimation = () => {
    freezeframeRef.current?.stop();
  };

  const toggleAnimation = () => {
    freezeframeRef.current?.toggle();
  };

  return (
    <div>
      <ReactFreezeframe
        ref={freezeframeRef}
        src="animated.gif"
        options={{ trigger: false }}
      />
      <div className="controls">
        <button onClick={startAnimation}>Start Animation</button>
        <button onClick={stopAnimation}>Stop Animation</button>
        <button onClick={toggleAnimation}>Toggle Animation</button>
      </div>
    </div>
  );
}
```

### 3. Event-Based Control

```jsx
import { useState } from 'react';
import ReactFreezeframe from 'react-freezeframe-vite';

function EventControlExample() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playCount, setPlayCount] = useState(0);

  const handleStart = (items, playing) => {
    setIsPlaying(true);
    setPlayCount(prev => prev + 1);
    console.log('Animation started!');
  };

  const handleStop = (items, playing) => {
    setIsPlaying(false);
    console.log('Animation stopped!');
  };

  const handleToggle = (items, playing) => {
    console.log('Animation toggled:', playing);
  };

  return (
    <div>
      <ReactFreezeframe
        src="demo.gif"
        options={{ trigger: 'hover' }}
        onStart={handleStart}
        onStop={handleStop}
        onToggle={handleToggle}
      />
      <div className="status">
        <p>Status: {isPlaying ? 'Playing' : 'Paused'}</p>
        <p>Play Count: {playCount}</p>
      </div>
    </div>
  );
}
```

### 4. Multiple GIFs Control

```jsx
import ReactFreezeframe from 'react-freezeframe-vite';

function MultipleGifsExample() {
  return (
    <div>
      {/* Control multiple GIFs with same settings */}
      <ReactFreezeframe
        options={{
          trigger: 'click',
          overlay: true,
          responsive: true
        }}
      >
        <img src="gif1.gif" alt="Animation 1" />
        <img src="gif2.gif" alt="Animation 2" />
        <img src="gif3.gif" alt="Animation 3" />
      </ReactFreezeframe>

      {/* Individual GIFs with different settings */}
      <div className="gif-grid">
        <ReactFreezeframe
          src="logo.gif"
          options={{ trigger: 'hover', overlay: false }}
        />
        <ReactFreezeframe
          src="banner.gif"
          options={{ trigger: 'click', overlay: true }}
        />
        <ReactFreezeframe
          src="icon.gif"
          options={{ trigger: false, overlay: true }}
        />
      </div>
    </div>
  );
}
```

### 5. Conditional Control

```jsx
import { useState, useEffect } from 'react';
import ReactFreezeframe from 'react-freezeframe-vite';

function ConditionalControlExample() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const freezeframeRef = useRef();

  useEffect(() => {
    // Auto-play when component becomes visible
    if (isVisible && isAutoplay) {
      setTimeout(() => {
        freezeframeRef.current?.start();
      }, 1000);
    }
  }, [isVisible, isAutoplay]);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} GIF
      </button>
      <button onClick={() => setIsAutoplay(!isAutoplay)}>
        {isAutoplay ? 'Disable' : 'Enable'} Autoplay
      </button>

      {isVisible && (
        <ReactFreezeframe
          ref={freezeframeRef}
          src="conditional.gif"
          options={{ trigger: false }}
        />
      )}
    </div>
  );
}
```

### 6. File Upload Integration

```jsx
import { useState, useRef } from 'react';
import ReactFreezeframe from 'react-freezeframe-vite';

function FileUploadExample() {
  const [uploadedGif, setUploadedGif] = useState(null);
  const fileInputRef = useRef();

  const handleFileUpload = (event) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'image/gif') {
      const url = URL.createObjectURL(file);
      setUploadedGif(url);
    } else {
      alert('Please select a GIF file');
    }
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/gif"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
      />
      <button onClick={() => fileInputRef.current?.click()}>
        Upload GIF
      </button>

      {uploadedGif && (
        <div className="preview">
          <h3>Uploaded GIF Preview:</h3>
          <ReactFreezeframe
            src={uploadedGif}
            alt="Uploaded GIF"
            options={{
              trigger: 'hover',
              overlay: false,
              responsive: true
            }}
          />
        </div>
      )}
    </div>
  );
}
```

### 7. Responsive Design Integration

```jsx
import ReactFreezeframe from 'react-freezeframe-vite';

function ResponsiveExample() {
  return (
    <div className="responsive-container">
      <ReactFreezeframe
        src="responsive.gif"
        options={{
          trigger: 'hover',
          overlay: true,
          responsive: true
        }}
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
      />
    </div>
  );
}
```

## ⚙️ Props

### Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Source URL for the GIF (when not using children) |
| `alt` | `string` | - | Alt text for the image |
| `options` | `FreezeframeOptions` | `{}` | Configuration options |
| `onStart` | `(items: Freeze[], isPlaying: boolean) => void` | - | Callback when GIF starts playing |
| `onStop` | `(items: Freeze[], isPlaying: boolean) => void` | - | Callback when GIF stops playing |
| `onToggle` | `(items: Freeze[], isPlaying: boolean) => void` | - | Callback when GIF toggles state |
| `children` | `ReactNode` | - | Child elements (alternative to src) |

### Options Object

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `trigger` | `'hover' \| 'click' \| false` | `'hover'` | Event that triggers animation |
| `overlay` | `boolean` | `false` | Show play icon overlay when paused |
| `responsive` | `boolean` | `true` | Make image responsive (100% width) |
| `warnings` | `boolean` | `true` | Show console warnings for non-GIF files |

## 🎯 Features

### Trigger Events

- **`'hover'`**: GIF animates on mouse hover (default)
- **`'click'`**: GIF animates on click/tap
- **`false`**: No automatic triggers (manual control only)

### Manual Control Methods

- **`start()`**: Start the animation
- **`stop()`**: Stop the animation
- **`toggle()`**: Toggle between play/pause

### Event Callbacks

```jsx
<ReactFreezeframe
  src="animated.gif"
  onStart={(items, isPlaying) => {
    console.log('Animation started');
  }}
  onStop={(items, isPlaying) => {
    console.log('Animation stopped');
  }}
  onToggle={(items, isPlaying) => {
    console.log('Animation toggled:', isPlaying);
  }}
/>
```

## 🔧 Build System Compatibility

### ✅ Supported
- **Vite** (recommended)
- **Webpack 5** with ESM
- **Rollup**
- **Parcel**
- **ESBuild**
- **SWC**

### ⚠️ Limited Support
- **Create React App** (CRA) - May require additional configuration
- **Webpack 4** - Requires additional loaders

## 📦 Bundle Information

- **Size**: ~24KB (gzipped: ~7KB)
- **Format**: ES Modules (ESM)
- **Tree-shaking**: ✅ Supported
- **Source maps**: ✅ Included

## 🚫 Limitations

### Technical Limitations
1. **GIF Format Only**: Only works with animated GIF files
2. **Browser Support**: Requires modern browsers with Canvas API support
3. **React Version**: Requires React 17 or higher
4. **Build Tools**: Optimized for modern bundlers (Vite, Webpack 5+)

### Feature Limitations
1. **No Video Support**: Does not work with MP4, WebM, or other video formats
2. **No APNG Support**: Animated PNG files are not supported
3. **Single Frame Capture**: Only captures the first frame for the paused state
4. **No Custom Overlays**: Limited to built-in play icon overlay

### Browser Compatibility
- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

## 🔄 Migration from v4.x

### Breaking Changes
1. **Import Syntax**: Now uses ES Modules
   ```jsx
   // Old (v4)
   const ReactFreezeframe = require('react-freezeframe');
   
   // New (v5)
   import ReactFreezeframe from 'react-freezeframe-vite';
   ```

2. **Build System**: No longer supports Babel/CRA out of the box
3. **React Version**: Requires React 17+ (was React 16+)

### Migration Steps
1. Update React to version 17 or higher
2. Update your build system to support ES Modules
3. Change import statements to use ES Module syntax
4. Test functionality in your application

## 🛠️ Development

### Local Development
```bash
# Clone the repository
git clone https://github.com/ctrl-freaks/freezeframe.js.git
cd freezeframe.js/packages/react-freezeframe

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Testing
```bash
# Run tests (when implemented)
npm test

# Run linting
npm run lint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original freezeframe.js library by [ctrl-freaks](https://github.com/ctrl-freaks)
- React community for feedback and contributions
- Vite team for the excellent build tool

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/ctrl-freaks/freezeframe.js/issues)
- **Documentation**: [GitHub Wiki](https://github.com/ctrl-freaks/freezeframe.js/wiki)
- **Discussions**: [GitHub Discussions](https://github.com/ctrl-freaks/freezeframe.js/discussions)

---

**Made with ❤️ for the React community**
