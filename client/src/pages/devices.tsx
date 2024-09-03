
import DeviceCard from "@/components/DeviceCard";
import NavBar from "@/components/NavBar";
import React, { useEffect, useState } from "react";


import { IoLogOut } from "react-icons/io5";


interface Device {
  id: number;
  name: string;
  temperature?: number;
  speed?: number;
  status?: string;
  lastUpdated?: string;
}

const DeviceManagement: React.FC = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [currentAdd, setCurrentAdd] = useState<Device | null>(null);

  const [devices, setDevices] = useState<Device[]>([]);

  const openAddModal = (item: Device) => {
    setCurrentAdd(item);
    setAddModalOpen(true);
  };

  // Mock fetch data or replace this with actual API call
  useEffect(() => {
    const fetchDevices = async () => {
      // Simulate an API call
      const data: Device[] = [
        { id: 1, name: "Device 1", temperature: 22, speed: 120, status: "Active", lastUpdated: "2024-09-03" },
        { id: 2, name: "Device 2", temperature: 25, speed: 115, status: "Inactive", lastUpdated: "2024-09-02" },
        { id: 3, name: "Device 3", temperature: 20, speed: 130, status: "Active", lastUpdated: "2024-09-01" },
      ];
      setDevices(data);
    };

    fetchDevices();
  }, []);


  return (
    <div className=" flex h-screen bg-gray-300">
      <div className="container mx-auto p-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {Array.isArray(devices) &&
            devices.map((device) => (
              <DeviceCard
                id={device.id}
                deviceName={device.name}
                temperature={device.temperature}
                speed={device.speed}
                status={device.status}
                lastUpdated={device.lastUpdated}
              />
            ))}

          {/* {currentAdd && (
            <AddModal
              isOpen={isAddModalOpen}
              onClose={() => setAddModalOpen(false)}
            />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default DeviceManagement;