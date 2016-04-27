// mainLayout -> receives and displays navbar, content, and footer
import React from 'react';

export default MainLayout = ({content}) => (
	<body>
		<main>
			{content}
		</main>
	</body>
);