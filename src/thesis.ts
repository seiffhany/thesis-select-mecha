const tempThesis = [
  "Ahmed Metwali Abdel Aziz - 3D printing of renewable materials: Software development and control processes (BMBF project TU Dresden)",
  "Ahmed Metwali Abdel Aziz - Design and implementation of SCARA robot Extruder for LDM 3D Printing (Hardware and Software- A))",
  "Ahmed Metwali Abdel Aziz - Design and implementation of SCARA robot for LDM 3D Printing (Hardware and Software- A)	",
  "Ahmed Metwali Abdel Aziz - Design and implementation of SCARA robot for LDM 3D Printing (Hardware and Software- B)",
  "Ahmed Yehia Shash - Characterization of AS4-APC  - PEKK High-Performance Thermoplastic Matrix Composites for Aerospace Applications",
  "Ahmed Yehia Shash - Characterization of TC-1100  - PPS Glass Fibre Reinforced Composites for Aerospace Applications",
  "Ahmed Yehia Shash - Design and Analysis of 3D-printed Foot Ware",
  "Ahmed Yehia Shash - Design and Analysis of Disc Brake by using FEA",
  "Ahmed Yehia Shash - Design and Manufacturing of Pouring System in Centrifugal Casting Machine",
  "Ahmed Yehia Shash - Manufacturing and Investigation of 3D-printed Foot Ware",
  "Ahmed Yehia Shash - Mechanical Properties Investigation of Braking Pads",
  "Ahmed Yehia Shash - Simulation of Energy Harvesting by using Piezoelectric Materials",
  "Ahmed Yehia Shash - Study of Wear Properties for Automotive Braking Pad",
  "Ahmed Yehia Shash - Utilization of industrial waste slag for producing eco-friendly concrete(Co-supervisor: Dr. Amr El Nemr)",
  "Ahmed Yehia Shash - Utilization of recycled glass in concrete mixture for ultra-high performance(Co-supervisor: Dr. Amr El Nemr)",
  "Amir Roushdy Abdelhameed - Advancing Dynamic Immobilization for Enhanced Robotic Functionality and Efficiency with Innovative Motor and Wheel Locking Mechanisms . (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Advancing the 7DoF Brushless Robot Arm: Achieving Full 7-Axis Functionality. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Affordable High-Reduction 3D Printed Robotic Servo Design. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Automated Low-Noise CNC Turning Machine Fabrication and Control for Multi-Purpose Applications (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Bio-Mechanically Inspired Lightweight Robotic Arms for Human-Like Flexibility and Seamless Integration . (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Creating a Digital Twin for the Flexible spine of a Humanoid Robot. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Design and Development of a Versatile Unmanned Ground Vehicle(UGV) for Remote Control and Multi-Vehicle Coordination. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Design-Control and Development of Legged Jumping Robot. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Designing and Controlling an Unconventional Robotic Joint-Cable-Driven Reducer with Zero Backlash. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Developing Cost-Effective 3D Printed Gearbox Actuator for Robotics. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Developing Oblique Swivel Joint Mechanisms for Robotic Applications. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Development in Design and Control and Assembly of a 7-Axis Brushless Robot Arm . (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Development in Design and Control of Affordable and Powerful 3D Printed Stepper Actuators for Robotics Applications. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Dynamic Spherical Mechanism for Robotics: Stepper-Motor-Driven 3DoF Parallel Joint. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Elevating Sensory Precision in Robotics through Advanced Optimization Techniques for Sensing Technologies . (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Enhanced Control and Optimization Techniques for Quadrupedal Robot Performance. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Enhancing Biped Robot Locomotion through Model Reference Adaptive Control of Actuators (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Enhancing Lower Limb Prosthetics - Machine Learning-Enabled Socket Design and Smart Mechanical Knee Control using EMG and EEG. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Enhancing Tele-presence Robots through Evolutionary Optimizing Design and Control Strategies . (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Exploration of Gravity Compensation and Spherical Robot Joint Design. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Exploring a Versatile Brushless Motor Controller for Robotics Applications. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Exploring Opportunities for Torque Enhancement in Prosthetic Limb Components through Mechanical Analysis. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Friction Testing of Bowden Cables in Robotic Arm Wrist: Assessing Energy Loss and Efficiency. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Gait Cycle Control for Humanoid Robots through Humanoid Spine Motion Analysis. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Implementing Adaptive Neural Learning in Actuator Control for Biped Robots (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Innovative Approaches to Lower Limb Prosthetics - Machine Learning-Driven Socket Design and Smart Mechanical Knee Control via EMG and EEG Integration. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Innovative Design and Fabrication of Robotics-Oriented Foundation for Precision Machinery. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Integrated Control and Design in Lower Limb Prosthetics - Machine Learning-Enhanced Socket Engineering and Smart Mechanical Knee Systems with EMG and EEG Interfaces. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Investigating Wireless Charging Systems for Mobile Robotsâ€”Design-Implementation-and Performance Analysis . (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Kinematic Exploration of Sphere Rolling Joints in Robotic Arm Design. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Machine Learning-Powered Design and Control of Humanoid Bipedal Locomotion. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Optimizing Arduino Control for Quasi Direct Drive Robotic Shoulder Actuator. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Optimizing Artificial Neural Network Implementation for Robotic Control Using FPGA Technology.  (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Optimizing Robotic Arm Design: Evaluating Bowden Cables for Lightweight and Cost-Effective Robotics. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Optimizing Torque Characteristics in Humanoid Robot's Series Elastic Actuator Model through Ansys Rigid Dynamics Finite Element Simulation. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Optimizing Torque in Lower Prosthetic Limb Mechanism through Ansys Rigid Body Simulation. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Parameter Estimation Board for Brushless DC (BLDC) and Permanent Magnet Synchronous (PMSM) Motors in Robotics Applications. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Reinforcement-Learning Empowered Vision and Stability Augmentation in Humanoid Robotics through Active Rotating Unbalance Control. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Revitalizing Failed 3D Prints - Filament Extrusion and Automated Recycling for Control Filament Production. (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Revolutionizing Hybrid Unmanned Vehicle Coordination through Vision-Based Command and Control . (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Robotic Operating System (ROS) Framework for Open Platform Humanoid Robots (https://www.aratronics.com/bsc2024)",
  "Amir Roushdy Abdelhameed - Stabilizing Humanoid Robots using Movable Rotating Unbalance Systems. (https://www.aratronics.com/bsc2024)",
  "Anke . Klingner - Control of Magnetic Helical Robots Generated by Alternating Rotating Magnetic Field (Co-supervisor: Dr. Lubna Tarek)",
  "Anke . Klingner - Design and construction of the Helical System",
  "Anke . Klingner - Design and construction of the Helical System: mechatronics (co-supervisor: Dr. Lubna Tarek)",
  "Anke . Klingner - Design of magnetic micro robots for biomedical applications",
  "Anke . Klingner - Fabrication and motion Characterization of biodegradable microrobots",
  "Anke . Klingner - High frequency magnetic field motion control of magnetic microrobots for medical applications",
  "Anke . Klingner - Micro robots Magnetic Field-Induced Real-Time control (co-supervisor: Dr. Lubna Tarek)",
  "Anke . Klingner - Motion optimization of magnetic microrobots using genetic algorithms",
  "Anke . Klingner - Observing and motion characterization of microorganisms for locomotion mimicking on microrobots",
  "Atef Afifi Mohamed - Automated Guided Vehicle Software development",
  "Atef Afifi Mohamed - Control system and design of a multi DOF robotic manipulator for trajectory tracking (with Dr. Lobna Tarek)",
  "Atef Afifi Mohamed - Design and implementation of control and electrical system for Automatic guided vehicle(with Dr. Lobna Tarek)",
  "Atef Afifi Mohamed - Design and implementation of control and electrical system for SCARA robot (with Dr. Lobna Tarek)",
  "Atef Afifi Mohamed - Design and implementation of Control system of a Delta 3D printer (with Dr. Lobna Tarek)",
  "Atef Afifi Mohamed - Design and Implementation of Hospital and mall Cleaning AGV Control and Electrical System",
  "Atef Afifi Mohamed - Design and Implementation of Hospital and mall Cleaning AGV Mechanical System",
  "Atef Afifi Mohamed - Design and Manufacturing of Heavy duty Material Handling AGV Mechanical system",
  "Atef Afifi Mohamed - Design and manufacturing of mechanical system for a multi DOF robotic manipulator in industrial  application (with Dr. Lobna Tarek)",
  "Atef Afifi Mohamed - Design and manufacturing of mechanical system of Automatic guided vehicle",
  "Atef Afifi Mohamed - Design and manufacturing of SCARA robot mechanical system (with Dr. Lobna Tarek)",
  "Atef Afifi Mohamed - Development of Automated Guided vehicle vision system",
  "Atef Afifi Mohamed - Dynamic modeling and control of a multi DOF robotic manipulator in industrial application (with Dr. Lobna Tarek)",
  "Atef Afifi Mohamed - Fine tuning of control parameters and electrical system for a PCB machine (with Dr. Lobna Tarek)",
  "Atef Afifi Mohamed - Fine tuning of control parameters and electrical system for a Spot Welding Machine",
  "Ayman Aly Elbadawy - Bilateral Control of a Pantograph Robot (co-supervisor: Dr. Lobna Tarek))",
  "Ayman Aly Elbadawy - Consensus of multi-agent systems using networked control systems",
  "Ayman Aly Elbadawy - Data-Driven Discovery of Governing Equations of a Quadrotor UAV",
  "Ayman Aly Elbadawy - Data-Driven Discovery of Governing Equations of Twin Rotor MIMO system",
  "Ayman Aly Elbadawy - Data-Driven MPC Control of a Quadrotor UAV",
  "Ayman Aly Elbadawy - Data-Driven MPC Control of a Twin Rotor MIMO system",
  "Ayman Aly Elbadawy - Development of an Autopilot System for Unmanned Aerial Vehicles",
  "Ayman Aly Elbadawy - Flight control of a Multicopter using Reinforcement Learning",
  "Ayman Aly Elbadawy - Flight Control of a Twin Rotor using Reinforcement Learning",
  "Ayman Aly Elbadawy - Implementation of the Occupancy grid mapping algorithm in 3D space using ROS",
  "Ayman Aly Elbadawy - Parameter and state estimation of a Twin rotor MIMO system",
  "Ayman Aly Elbadawy - Particle filter localization of Multicopter using ROS",
  "Ayman Aly Elbadawy - Quadrotor Control Using Model Reference Adaptive Control with ROS Implementation",
  "Ayman Aly Elbadawy - Quadrotor formation control using networked control systems",
  "Ayman Aly Elbadawy - Quadrotor state estimation with ROS implementation",
  "Ayman Aly Elbadawy - Quadrotor trajectory tracking control using non-linear model predictive control with ROS implementation",
  "Ayman Aly Elbadawy - Quadrotor trajectory tracking control using sliding mode control with ROS implementation",
  "Ayman Aly Elbadawy - Six DoF Tracking of Drones using Motion Capture System",
  "Ayman Aly Elbadawy - System design and six-DOF position/force control for robotic manipulator (in collaboration with Dr. Lobna Tarek)",
  "Ayman Aly Elbadawy - Twin Rotor Control Using Model Reference Adaptive Control",
  "Bakr Mohamed Rabeeh - Ceramization  of Advanced Extra High Strength Steel A-XHSS For  Automotive Applications",
  "Bakr Mohamed Rabeeh - Design and Optimization of Advanced Concrete Reinforced Advanced Ultra High Strength Steel A UHSS For Terrorist Attack.",
  "Bakr Mohamed Rabeeh - Design and Optimization of Hybrid Sandwich Structure Advanced Ultra High Strength Steel  A- UHSS for Automotive Engineering.",
  "Bakr Mohamed Rabeeh - Engineering of Advanced High Strength Steel for Welded   Oil Gas Piping Under AIV",
  "Bakr Mohamed Rabeeh - Integrated Computationally Materials Engineering  ICME For Ultra High Strength Steel A UHSS",
  "Bakr Mohamed Rabeeh - Modeling and Simulation of High Energy Absorption A-UHSS for Recent Automotive Class to Safe Personnel.",
  "Bakr Mohamed Rabeeh - New Nontraditional Processing of A-UHSS via Hot Isostatic Pressing  HIPing Powder Pack.",
  "Bakr Mohamed Rabeeh - The Control of Either - High Strength  -Ductility  or Hardening (Surface - Bulk) for either 1st 2nd or 3rd AHSS.",
  "El-Sayed Ibrahim Morgan - ITS: Development of a Scaled Smart City Testbed for Cooperative Driving - Embedded Control (Co-supervisor: Dr. Catherine Elias)",
  "El-Sayed Ibrahim Morgan - ITS: Development of a Scaled Smart City Testbed for Cooperative Driving - Navigation Module",
  "El-Sayed Ibrahim Morgan - ITS: Development of a Scaled Smart City Testbed for Cooperative Driving - Vehicle Development",
  "El-Sayed Ibrahim Morgan - RoboClinic: Development of a Robotic System for High-Dynamics Application - Vision Feedback (Co-supervisor: Dalia Mamdouh M.Sc.)",
  "El-Sayed Ibrahim Morgan - RoboClinic: Development of a Vision-based Tracking System - Force Estimation (Co-supervisor: Dalia Mamdouh M.Sc.)",
  "El-Sayed Ibrahim Morgan - RoboClinic: Development of a Vision-based Tracking System - Robot Perception (Co-supervisor: Dalia Mamdouh M.Sc.)",
  "El-Sayed Ibrahim Morgan - RoboFactory: Development of an Automated Guided Vehicle (AGV) - Localization &amp; Control Module (Co-supervisor: Dr. Catherine Elias)",
  "El-Sayed Ibrahim Morgan - RoboFactory: Development of an Automated Guided Vehicle (AGV) - Moving Platform",
  "El-Sayed Ibrahim Morgan - RoboFactory: Development of an Automated Guided Vehicle (AGV) - Scissor Lift Platform",
  "El-Sayed Ibrahim Morgan - RoboFarm: Development of a Robotic Platform for Rough Terrain - Localization Module (Co-supervisor: Dr. Catherine Elias)",
  "El-Sayed Ibrahim Morgan - RoboFarm: Development of a Robotic Platform for Rough Terrain - Moving Platform",
  "El-Sayed Ibrahim Morgan - RoboFarm: Development of a Robotic Platform for Rough Terrain - Power Train System",
  "Eman Ahmed Hamdy Azab - Design and Implementation of Onboard Intrusion Detection System (Sponsored by EG-CERT and Co-supervised by Dr. Minar Elaasar)",
  "Eman Ahmed Hamdy Azab - Design of Embedded System Security Evaluation Tool (Sponsored by EG-CERT and Co-supervised by Dr. Minar Elaasar)",
  "Ezzeldin Sobhi Metwalli Ali - 4D printing using smart materials (Co-supervisors: Prof. Hesham Hegazi and Dr. Amna Ramzy)",
  "Ezzeldin Sobhi Metwalli Ali - Magnetic nanoparaticles- polymer nanocomposites for sensor applications (Dr. Amna Ramzy and Dr. Mohamed Elwi)",
  "Ezzeldin Sobhi Metwalli Ali - Nanostructured materials for organic-solar cell applications (Co-supervisor: Dr Mohamed Elwi)",
  "Ezzeldin Sobhi Metwalli Ali - Polymer electrolyte for solid-state battery",
  "Ezzeldin Sobhi Metwalli Ali - Polymer membrane for lithium-ion batteries",
  "Hamdy Abdallah Kandil - Aerodynamic analysis of different wind-turbine-blade profiles using Computational Fluid Dynamics (CFD). (Co-supervisor: Dr. Ramy Amir)",
  "Hamdy Abdallah Kandil - Car Aerodynamics: Shape optimization to minimize Drag and Lift (Co-supervisor: Dr. Ramy Amir)",
  "Hamdy Abdallah Kandil - Computational optimization of vehicle spacing to reduce drag in truck platoons. (co-supervisor: Dr. Ramy Amir)",
  "Hamdy Abdallah Kandil - Design and copntrol of an automated hydraulic waste compactor Machine - 1",
  "Hamdy Abdallah Kandil - Design and copntrol of an automated hydraulic waste compactor Machine - 2",
  "Hamdy Abdallah Kandil - Design and Implementation of a cleaning robot for photo voltaic panels  using water- 1",
  "Hamdy Abdallah Kandil - Design and Implementation of a cleaning robot for photo voltaic panels using water- 2",
  "Hamdy Abdallah Kandil - Design and Implementation of musical dancing fountain - 1",
  "Hamdy Abdallah Kandil - Design and Implementation of musical dancing fountain - 2",
  "Hamdy Abdallah Kandil - Design and optimization of domestic solar water heaters.",
  "Hamdy Abdallah Kandil - Design and optimization of domestic solar water heaters. in Egypt",
  "Hamdy Abdallah Kandil - Design of  a climbing robot for dry cleaning of Windows and solar panels.",
  "Hamdy Abdallah Kandil - Modeling and simulation of solar panels cooling using Computational Fluid Dynamics (CFD). (Co-supervisor: M.Sc. Simone Sami)",
  "Hamdy Abdallah Kandil - Modeling and simulation of solar panels cooling using Computational Fluid Dynamics . (Co-supervisor: M.Sc. Simone Sami)",
  "Hamdy Abdallah Kandil - Using image processing to determine the time of solar panel cleaning and the quality of robot cleaning.",
  "Hesham Ahmed Mahmoud Mostafa Hegazi - Design and Modeling of 4D Printed Devices (Co-supervisors: Prof. Ezzeldin Metwalli and Dr. Amna Ramzy)",
  "Hesham Ahmed Mahmoud Mostafa Hegazi - Design and Modeling of 4D Printed Devices (Co-supervisors: Prof. Ezzeldin Metwalli and Dr. Amna Ramzy)",
  "Hesham Ahmed Mahmoud Mostafa Hegazi - Mini Portable Remotely controlled Electric Crane: Control System (Co-Supervisor: Prof. Ezzeldin Metwalli)",
  "Hesham Ahmed Mahmoud Mostafa Hegazi - Smart Boom Gate: Design and Manufacturing (Co-Supervisor: Prof. Ezzeldin Metwalli)",
  "Hesham Ahmed Mahmoud Mostafa Hegazi - Smart Boom Gate: License Plate Recognition System (Co-Supervisor: Prof. Ezzeldin Metwalli)",
  "Hesham Ahmed Mahmoud Mostafa Hegazi - Topology Optimization of Mechanical Components",
  "Hesham Ahmed Mahmoud Mostafa Hegazi - Wear Assessment of Plastic Gears using Image Processing (Co-supervision: Dr. Amna Ramzy)",
  "Hesham Hamed Ahmed Ibrahim - Application of Artificial Intelligence in 3D Tower Cranes. (Co-supervisor: Dr. Lobna Tarek)",
  "Hesham Hamed Ahmed Ibrahim - Fabrication and Mechanical Simulation of 3D Printed Components. (Co-supervisor: Dr. Amna Ramzy &amp; IFB Stuttgart)",
  "Hesham Hamed Ahmed Ibrahim - Fabrication and Mechanical Testin of 3D Printed Components. (Co-supervisor: Dr. Amna Ramzy &amp; IFB Stuttgart)",
  "Hesham Hamed Ahmed Ibrahim - Horizontal Twist Drill Multilink Robotic Arm for Surgical Purposes. (Co-supervisor: Dr. Omar Shehata)",
  "Hesham Hamed Ahmed Ibrahim - Machine Learning Modelling of 3D Tower Cranes. (Co-supervisor: Dr. Lobna Tarek)",
  "Hesham Hamed Ahmed Ibrahim - Machine Learning Modelling of Rotational Multilink Robotic Arm. (Co-supervisor: Dr. Omar Shehata)",
  "Hesham Hamed Ahmed Ibrahim - Needle Insertion Robot for Surgical Purposes. (Co-supervisor: Dr. Omar Shehata)",
  "Hesham Hamed Ahmed Ibrahim - Vertical Twist Drill Multilink Robotic Arm for Surgical Purposes. (Co-supervisor: Dr. Omar Shehata)",
  "Hisham Mostafa El Sherif - Design and implementation of a coffee Machine -1 (Co-supervisor: Dr. Walid Omran)",
  "Hisham Mostafa El Sherif - Design and implementation of a coffee Machine -2 (Co-supervisor: Dr. Walid Omran)",
  "Hisham Mostafa El Sherif - Design and Implementation of a photo voltaic panels cleaning robot with water- 1",
  "Hisham Mostafa El Sherif - Design and Implementation of a photo voltaic panels cleaning robot with water- 2",
  "Hisham Mostafa El Sherif - Design and Implementation of active suspension system for electrical Golf Car -1",
  "Hisham Mostafa El Sherif - Design and Implementation of active suspension system for electrical Golf Car -2",
  "Hisham Mostafa El Sherif - Design and Implementation of an automated hydraulic compactor Machine - 1",
  "Hisham Mostafa El Sherif - Design and Implementation of an automated hydraulic compactor Machine - 2",
  "Hisham Mostafa El Sherif - Design and Implementation of dancing fountain - 1",
  "Hisham Mostafa El Sherif - Design and Implementation of dancing fountain - 2",
  "Hisham Mostafa El Sherif - Design and Implementation of electrical Golf Car - 1",
  "Hisham Mostafa El Sherif - Design and Implementation of electrical Golf Car - 2",
  "Hisham Mostafa El Sherif - Eight stations production line PLC programming with Function and function chart â€“ 1 (Co-supervisor: Dr. Walid Omran)",
  "Hisham Mostafa El Sherif - Eight stations production line PLC programming with Function and function chart â€“ 2 (Co-supervisor: Dr. Walid Omran)",
  "Hisham Mostafa El Sherif - Eight stations production line PLC programming with Function and function chart â€“ 2 (Co-supervisor: Dr. Walid Omran)",
  "Hisham Mostafa El Sherif - Production line implementation and programming â€“ 1 (Co-supervisor: Dr. Walid Omran)",
  "Hisham Mostafa El Sherif - Production line implementation and programming â€“ 2 (Co-supervisor: Dr. Walid Omran)",
  "Lamia Ahmed Shihata - Simulation-Based Optimization of an Energy Efficient Manufacturing System-2",
  "Mohamed Abdel Ghany Ahmed Salem - Efficiency Optimization in Wireless EV Charging Systems",
  "Mohamed Abdel Ghany Ahmed Salem - Modeling and control for smart grid integration of solar energy conversion system",
  "Mohamed Abdel Ghany Ahmed Salem - Modeling and control for smart grid integration of Wind energy conversion system",
  "Mohamed Abdel Ghany Ahmed Salem - Security System for Video Transmission in Internet of Multimedia Things",
  "Mohamed Elwi Mitwally - Control of Magnetic Helical Robots Generated by Alternating Rotating Magnetic Field(Co-supervisor: Dr. Lobna Tarek)",
  "Mohamed Elwi Mitwally - Design and construction of the Helical System(Co-supervisor: Dr. Lobna Tarek)",
  "Mohamed Elwi Mitwally - Design of magnetic micro robots for biomedical applications",
  "Mohamed Elwi Mitwally - Fabrication and motion Characterization of biodegradable microrobots",
  "Mohamed Elwi Mitwally - High frequency magnetic field motion control of magnetic microrobots for medical applications",
  "Mohamed Elwi Mitwally - Micro robots Magnetic Field-Induced Real-Time control(Co-supervisor: Dr. Lobna Tarek)",
  "Mohamed Elwi Mitwally - Wiring optimization of a KUKA robot (Co-supervisor: Dr. Hesham Hegazi)",
  "Mohammed Salama Abdelhady Mohamed - Air flow simulation around PV panels (Co-Supervisro: Dr. Ramy Amir)",
  "Mohammed Salama Abdelhady Mohamed - Cleaning of PV Panels Using Natural Air Nozzles and Dust Shields: Experimental Study (Co-Supervisor: Dr. Ramy Amir)",
  "Mohammed Salama Abdelhady Mohamed - Cleaning of PV Panels Using Natural Air Nozzles and Dust Shields: Numerical Study (Co-Supervisor: Dr. Ramy Amir)",
  "Mohammed Salama Abdelhady Mohamed - Influence of Car Trails on the Drag Force Acting on Other Cars (Co-Supervisor: Dr. Ramy Amir)",
  "Mohammed Salama Abdelhady Mohamed - Influence of panel spacing on the dust accumulation rate: Numerical study (Co-Supervisor: Dr. Ramy Amir)",
  "Mohammed Salama Abdelhady Mohamed - Influence of the Unbalanced Mass on Mechanical Vibrations (Co-Supervisor: Dr. Ramy Amir)",
  "Mohammed Salama Abdelhady Mohamed - Magnetic Sensing of Micro-Medical Robot (Co-Supervisors: Dr. Mohamed Elwi and Dr. Anke Klinger)",
  "Mohammed Salama Abdelhady Mohamed - production of Fresh Water Based on Condensation of Ambient Water Vapor",
  "Mohammed Salama Abdelhady Mohamed - Redesign of a Mechanical vibration system for PV panels (Co.  Sup.: Dr. Ramy Amir)",
  "Mohammed Salama Abdelhady Mohamed - Redesign of a Spring-shield system to mitigate dust on PV Panels (Co-Supervisor: Dr. Ramy Amir)",
  "Mohammed Salama Abdelhady Mohamed - Re-design of an Automatic Climbing Cleaning carriage for PV Panels (Supervisor: Prof.Dr.  Hamdy Kandil)",
  "Mohammed Salama Abdelhady Mohamed - Re-design of an Automatic Climbing Cleaning carriage for vertical walls  (Supervisor: Prof.Dr. Hamdy Kandil)",
  "Mohammed Salama Abdelhady Mohamed - Redesing of Wind Turbines Blade to Operate at a Low Wind Speed (Supervisor: Prof.Dr. Hamdy Kandil)",
  "Mohammed Salama Abdelhady Mohamed - Reprograming of an Automated Clean Carriage for PV panels-I (Supervisor: Prof.Dr. Hamdy Kandil)",
  "Mohammed Salama Abdelhady Mohamed - Reprograming of an Automated Clean Carriage for PV panels-II (Supervisor: Prof.Dr. Hamdy Kandil)",
  "Mohammed Salama Abdelhady Mohamed - Reprograming of an Automatic Climbing Cleaning carriage for PV panels (Supervisor: Prof.Dr. Hamdy Kandil)",
  "Mohammed Salama Abdelhady Mohamed - Reprograming of an Automatic Climbing Cleaning carriage for vertical walls (Supervisor: Prof.Dr. Hamdy Kandil)",
  "Mohammed Salama Abdelhady Mohamed - Simulation of Temperature Distribution over a PV Panel using ANSYS",
  "Mohammed Salama Abdelhady Mohamed - Temperature Distribution Measurements over a PV Panel using an Infrared Camera",
  "Mohammed Salama Abdelhady Mohamed - Water Desalination based on Renewable Energy",
  "Nahed Abdel Hamid El Mahallawy - 1.	Fabrication and testing of metallic products using the existing 3D printer for metals",
  "Nahed Abdel Hamid El Mahallawy - 10.	Low cost Novel air conditioning for interior cooling of buildings using PCM (in collaboration with RUBITHERM Co)",
  "Nahed Abdel Hamid El Mahallawy - 11.	Design and implementation of Solar Air heater for poultry farm",
  "Nahed Abdel Hamid El Mahallawy - 12.	Upgrading and design of a vertical axis Savonious wind turbine ( co supervised by Dr Mohamed Salama)",
  "Nahed Abdel Hamid El Mahallawy - 2.	Solar Water desalination unit: effect of Water quality and salinity( co supervised by Dr Hebatulla Ashraf)",
  "Nahed Abdel Hamid El Mahallawy - 3.	Water desalination using hybrid renewable energy sources ( co supervised by Dr Hebatulla Ashraf)",
  "Nahed Abdel Hamid El Mahallawy - 4.	Incremental sheet metal forming using CNC milling machine â€“ a new technique",
  "Nahed Abdel Hamid El Mahallawy - 5.	Application of Artificial Intelligence for quality prediction in manufacturing ( co-supervised by Dr Maggie Mashaly",
  "Nahed Abdel Hamid El Mahallawy - 6.	Design and construction of vertical axis windmill ( in collaboration with Tennessee Technological University)",
  "Nahed Abdel Hamid El Mahallawy - 8.	Production and evaluation of metallic products using robot arm for 3D printing",
  "Nahed Abdel Hamid El Mahallawy - Water filtration portable system for potable water using Biosand and solar power( in collaboration with Tennessee Technological University)",
  "Omar Mahmoud Mohamed Shehata - ITS: Development of a Scaled Smart City Testbed for Cooperative Driving - Digital Twin (Co-supervisor: Dr. Catherine Elias)",
  "Omar Mahmoud Mohamed Shehata - ITS: Development of a Scaled Smart City Testbed for Cooperative Driving - Infrastruture (Co-supervisor: Dr. Catherine Elias)",
  "Omar Mahmoud Mohamed Shehata - ITS: Development of a Scaled Smart City Testbed for Cooperative Driving - Visual Localization (Co-supervisor: Dalia Mamdouh M.Sc.)",
  "Omar Mahmoud Mohamed Shehata - RoboClinic: Development of a Robotic System for High-Dynamics Application - Force Identification (in collaboration with Prof. Hesham Hamed)",
  "Omar Mahmoud Mohamed Shehata - RoboClinic: Development of a Robotic System for High-Dynamics Application - SCARA Platform (in collaboration with Prof. Hesham Hamed)",
  "Omar Mahmoud Mohamed Shehata - RoboClinic: Development of a Vision-based Tracking System - Patient Perception (Co-supervisor: Dalia Mamdouh M.Sc.)",
  "Omar Mahmoud Mohamed Shehata - RoboFactory: Development of an Automated Guided Vehicle (AGV) - Digital Twin",
  "Omar Mahmoud Mohamed Shehata - RoboFactory: Development of an Automated Guided Vehicle (AGV) - Navigation &amp; Perception Module (Co-supervisor: Dalia Mamdouh M.Sc.)",
  "Omar Mahmoud Mohamed Shehata - RoboFactory: Development of an Automated Guided Vehicle (AGV) - Power Train System",
  "Omar Mahmoud Mohamed Shehata - RoboFarm: Development of a Robotic Platform for Rough Terrain - Digital Twin",
  "Omar Mahmoud Mohamed Shehata - RoboFarm: Development of a Robotic Platform for Rough Terrain - Embedded Control",
  "Omar Mahmoud Mohamed Shehata - RoboFarm: Development of a Robotic Platform for Rough Terrain - Perception Module (Co-supervisor: Dr. Catherine Elias)",
  "Taher Mohamed Salaheldin - Design optimization for Improved Efficiency and performance for Servo valves with Torque Motors Integration (In Collaboration with Assoc. Prof. Amir Roushdy)",
  "Taher Mohamed Salaheldin - Development of smart servo valves with integrated torque motors for industrial applications (in collaboration with Assoc. Prof. Amir Roushdy)",
  "Taher Mohamed Salaheldin - Manufacturing Techniques for Cost-Effective Production for Servo Valves with Torque Motors integration ( in Collaboration with Assoc. Prof. Amir Roushdy)",
  "Tarek Abbas Metwally Khalil - experimental investigations of a photovoltaic thermal thermal system for enhancing the share of Renewable Energy in green buildings",
  "Tarek Abbas Metwally Khalil - experimental investigations of a solar thermal system for generation useful domestic heat",
  "Tarek Abbas Metwally Khalil - investigation the impact of Energy storage to extend the Energy production time in a solar Photovoltaic sytem",
  "Tarek Abbas Metwally Khalil - Sea water desalination using solar energy - Photovoltaic system  &amp; PhaseChange Material",
  "Tarek Abbas Metwally Khalil - Sea water desalination using solar energy - thermal Photovoltaic system for generation useful domestic heat",
  "Tarek Abbas Metwally Khalil - Sea water desalination using solar energy - thermal Photovoltaic system for generation useful domestic heat",
  "Tarek Abbas Metwally Khalil - using Phase Change Material and Thermoelectric Generator to enhance Energy Production in a Photovoltaic System",
  "Walid Atef Hafez Omran - Design and construction of a solar motorized scarecrow-1 (with Dr. Hesham Elsherif)",
  "Walid Atef Hafez Omran - Design and construction of a solar motorized scarecrow-2 (with Dr. Hesham Elsherif)	",
  "Walid Atef Hafez Omran - Design and construction of a solar motorized scarecrow-3 (with Dr. Hesham Elsherif)	",
  "Walid Atef Hafez Omran - Design and Implementation of a smart car parking system -1 (with Dr. Hesham Elsherif)",
  "Walid Atef Hafez Omran - Design and Implementation of a smart car parking system -2 (with Dr. Hesham Elsherif)",
  "Walid Atef Hafez Omran - Embedded Systems in smart electric vehicles-1 (with Prof. Mohamed AbdElghany)",
  "Walid Atef Hafez Omran - Embedded Systems in smart electric vehicles-2 (with Prof. Mohamed AbdElghany)",
  "Walid Atef Hafez Omran - Field Oriented Control of Permanent magnet synchronous motors",
  "Walid Atef Hafez Omran - Hardware implementation of a traction inverter for electric vehicles powertrain -2",
  "Walid Atef Hafez Omran - Hardware implementation of a traction inverter for electric vehicles powertrain-1",
  "Walid Atef Hafez Omran - Modulation techniques for Inverter control in electric vehicles powertrain -1",
  "Walid Atef Hafez Omran - Modulation techniques for Inverter control in electric vehicles powertrain -2",
  "Walid Atef Hafez Omran - Variable speed drives of industrial three phase induction motors",
  "Walid Atef Hafez Omran - Virtual inertial control in autonomous microgrids (with Prof. Ayman Elbadawy)",
  "Walid Atef Hafez Omran - Wireless charging of electric vehicles-1 (with Prof. Mohamed AbdElghany)",
];

export const thesis = tempThesis.map((t, idx) => {
  return {
    id: `topic-${idx + 1}`,
    content: t,
  };
});
