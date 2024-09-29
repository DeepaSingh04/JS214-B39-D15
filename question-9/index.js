// index.js

// Device Constructor
class Device {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.status = 'off'; // Default status
    }

    turnOn() {
        this.status = 'on';
        console.log(`${this.name} is now ${this.status}.`);
    }

    turnOff() {
        this.status = 'off';
        console.log(`${this.name} is now ${this.status}.`);
    }

    checkStatus() {
        console.log(`${this.name} is currently ${this.status}.`);
    }
}

// SmartHome Constructor
class SmartHome {
    constructor(owner) {
        this.owner = owner;
        this.devices = [];
    }

    addDevice(device) {
        this.devices.push(device);
        console.log(`${device.name} added to ${this.owner}'s smart home.`);
    }

    removeDevice(deviceName) {
        this.devices = this.devices.filter(device => device.name !== deviceName);
        console.log(`${deviceName} removed from ${this.owner}'s smart home.`);
    }

    listDevices() {
        console.log(`${this.owner}'s Smart Home Devices:`);
        this.devices.forEach(device => console.log(`- ${device.name} (${device.type})`));
    }
}

// User Constructor
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    async authenticate() {
        // Simulate server-side authentication
        return fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Authentication failed');
                }
                return response.json();
            })
            .then(data => {
                console.log(`User ${this.username} authenticated successfully.`);
                return data;
            })
            .catch(err => console.error(err));
    }
}

// Demonstration of functionality
async function runSmartHomeSystem() {
    // Instantiate devices
    const light1 = new Device('Living Room Light', 'Smart Light');
    const thermostat1 = new Device('Main Thermostat', 'Smart Thermostat');

    // Create SmartHome
    const mySmartHome = new SmartHome('Alice');
    mySmartHome.addDevice(light1);
    mySmartHome.addDevice(thermostat1);
    mySmartHome.listDevices();

    // Instantiate user
    const user1 = new User('Alice', 'password123');
    await user1.authenticate();

    // Interact with devices
    light1.turnOn();
    thermostat1.checkStatus();
    light1.turnOff();
}

// Run the smart home system demonstration
runSmartHomeSystem();
