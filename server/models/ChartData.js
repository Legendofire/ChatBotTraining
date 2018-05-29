let ChartData = new Map();

//Transform
ChartData.set("transform_confirmation", [
    { name: 'Yes', value: 28 },
    { name: 'No', value: 72 }
]);

//Innovate
ChartData.set("innovation", [
    { name: 'Internally', value: 42 },
    { name: 'Externally', value: 48 },
    { name: 'None', value: 10 }
]);

//Organization
ChartData.set("org_type", [
    { name: 'Reinventor', value: 23 },
    { name: 'Practitioner', value: 41 },
    { name: 'Aspirational', value: 37 }
]);

//Role
ChartData.set("role", [
    { name: 'Technology Visionaries', value: 24 },
    { name: 'Transformation Business Leaders', value: 21 },
    { name: 'IT Coordinator', value: 13 },
    { name: 'Trusted Business Advisor', value: 12 }
]);

//Impact
ChartData.set("impact", [
    { name: 'Technology', value: 50 },
    { name: 'Market Change', value: 14 },
    { name: 'Inside the Organization', value: 5 },
    { name: 'Competition', value: 31 }
]);

//Priorities
ChartData.set("priorities", [
    { name: 'Innovate for Competitveness', value: 50 },
    { name: 'Meet Business Needs', value: 9 },
    { name: 'Optimize Investment', value: 57 },
    { name: 'Better Digital Experience', value: 12 }
]);

//Barriers
ChartData.set("barriers", [
    { name: 'Lack of Skills', value: 15 },
    { name: 'Cyber Security Threats', value: 23 },
    { name: 'Culture and People', value: 8 },
    { name: 'Lack of Budget', value: 54 }
]);

module.exports = ChartData;
