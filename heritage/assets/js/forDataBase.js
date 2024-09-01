document.addEventListener('DOMContentLoaded', async function() {
    // Function to fetch dashboard data from the server
    async function fetchDashboardData() {
        try {
            const response = await fetch('http://localhost:8080/api/user-data');// URL to your Java API
            const data = await response.json();
            updateDashboard(data);
        } catch (error) {
            console.error('Error fetching dashboard data:', error);
            // Optional: Show error message to users
        }
    }

    // Function to update the dashboard with fetched data
    function updateDashboard(data) {
        document.getElementById('userName').textContent = data.userName;
        document.getElementById('userCount').textContent = data.userCount;
        document.getElementById('complaintCount').textContent = data.complaintCount;
        document.getElementById('sosCount').textContent = data.sosCount;
        document.getElementById('maleCount').textContent = data.maleCount;
        document.getElementById('femaleCount').textContent = data.femaleCount;
        document.getElementById('alertsCount').textContent = data.alertsCount;
        document.getElementById('hotspotsCount').textContent = data.hotspotsCount;
    }

    // Fetch dashboard data when the page loads
    fetchDashboardData();
});

// SOS Dashboard Table
$(document).ready(function() {
    async function fetchUserTableData() {
        try {
            const response = await $.ajax({
                url: 'fetchUsers',
                type: 'GET',
                dataType: 'json'
            });

            $('#sosTableDashBord').empty(); // Clear existing data

            // Sort data in descending order by ID
            response.sort((a, b) => b.id - a.id);

            // Insert sorted data into the table
            response.forEach(user => {
                $('#sosTableDashBord').append(`
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.username}</td>
                        <td>${user.address}</td>
                        <td><a href="userDetails.php?id=${user.id}" class="btn btn-primary">View Details</a></td>
                    </tr>
                `);
            });

            // Add scrollbar if there are more than 10 rows
            const tableBody = $('#userTableBody');
            $('.table-wrapper').css('overflow-y', tableBody.children().length > 10 ? 'auto' : 'hidden');
        } catch (error) {
            console.error('Error fetching user data:', error);
            // Optional: Show error message to users
        }
    }

    fetchUserTableData(); // Fetch user data on page load
});




//for allUser.php page table

// fetchUserData.js
$(document).ready(function() {
    function fetchUserData() {
        $.ajax({
            url: 'fetchUserData.php', // URL to your PHP script
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                $('#userTable').empty(); // Clear existing data

                // Sort data in reverse order (newest first)
                data.sort((a, b) => b.id - a.id);
                
                // Insert data into the table
                data.forEach(user => {
                    $('#userTable').append(`
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.username}</td>
                            <td>${user.email_id}</td>
                            <td>${user.Device_M}</td>
                            <td><a href="profile.php?id=${user.id}" class="btn btn-primary">View Details</a></td>
                            <td><a href="userSafeInfo.php?id=${user.id}" class="btn btn-danger">info</a></td>
                        </tr>
                    `);
                });
            },
            error: function(xhr, status, error) {
                console.error('Error fetching user data:', error);
            }
        });
    }

    fetchUserData(); // Fetch user data on page load
});

// for m_user.php page Table 
// fetchUserData.js
$(document).ready(function() {
    function fetchUserData() {
        $.ajax({
            url: 'fetchUserData.php', // URL to your PHP script
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                $('#userTableMale').empty(); // Clear existing data

                // Sort data in reverse order (newest first)
                data.sort((a, b) => b.id - a.id);
                
                // Insert data into the table
                data.forEach(user => {
                    $('#userTableMale').append(`
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.username}</td>
                            <td>${user.email_id}</td>
                            <td>${user.Device_M}</td>
                            <td><a href="profile.php?id=${user.id}" class="btn btn-primary">View Details</a></td>
                            <td><a href="userSafeInfo.php?id=${user.id}" class="btn btn-danger">info</a></td>
                        </tr>
                    `);
                });
            },
            error: function(xhr, status, error) {
                console.error('Error fetching user data:', error);
            }
        });
    }

    fetchUserData(); // Fetch user data on page load
});




// for f_user.php page Table 
// fetchUserData.js
$(document).ready(function() {
    function fetchUserData() {
        $.ajax({
            url: 'fetchUserData.php', // URL to your PHP script
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                $('#userTableFemale').empty(); // Clear existing data

                // Sort data in reverse order (newest first)
                data.sort((a, b) => b.id - a.id);
                
                // Insert data into the table
                data.forEach(user => {
                    $('#userTableFemale').append(`
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.username}</td>
                            <td>${user.email_id}</td>
                            <td>${user.Device_M}</td>
                            <td><a href="profile.php?id=${user.id}" class="btn btn-primary">View Details</a></td>
                            <td><a href="userSafeInfo.php?id=${user.id}" class="btn btn-danger">info</a></td>
                        </tr>
                    `);
                });
            },
            error: function(xhr, status, error) {
                console.error('Error fetching user data:', error);
            }
        });
    }

    fetchUserData(); // Fetch user data on page load
});


// for hotspot.php page Table 
// fetchUserData.js
$(document).ready(function() {
    function fetchUserData() {
        $.ajax({
            url: 'fetchUserData.php', // URL to your PHP script
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                $('#hotpotsTable').empty(); // Clear existing data

                // Sort data in reverse order (newest first)
                data.sort((a, b) => b.id - a.id);
                
                // Insert data into the table
                data.forEach(hots => {
                    $('#hotpotsTable').append(`
                        <tr>
                            <td>${hots.id}</td>
                            <td>${hots.pin}</td>
                            <td>${hots.ip}</td>
                            <td>${hots.sos}</td>
                            <td>${hots.accedent}</td>
                            <td><a href="hot_view.php?id=${hots.id}" class="btn btn-danger">info</a></td>
                        </tr>
                    `);
                });
            },
            error: function(xhr, status, error) {
                console.error('Error fetching user data:', error);
            }
        });
    }

    fetchUserData(); // Fetch user data on page load
});




// for sos_table.php page Table 
// fetchUserData.js
$(document).ready(function() {
    function fetchUserData() {
        $.ajax({
            url: 'fetchUserData.php', // URL to your PHP script
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                $('#sosTable').empty(); // Clear existing data

                // Sort data in reverse order (newest first)
                data.sort((a, b) => b.id - a.id);
                
                // Insert data into the table
                data.forEach(hots => {
                    $('#sosTable').append(`
                        <tr>
                            <td>${hots.id}</td>
                            <td>${hots.pin}</td>
                            <td>${hots.ip}</td>
                            <td>${hots.sos}</td>
                            <td>${hots.accedent}</td>
                            <td><a href="hot_view.php?id=${hots.id}" class="btn btn-danger">info</a></td>
                        </tr>
                    `);
                });
            },
            error: function(xhr, status, error) {
                console.error('Error fetching user data:', error);
            }
        });
    }

    fetchUserData(); // Fetch user data on page load
});