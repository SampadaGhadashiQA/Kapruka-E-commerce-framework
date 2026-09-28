
import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe('Kapruka Electronics Page', () => {

    test.only('Verify Kitchen Appliances tooltip on hover', async ({ page }) => {

        const electronics = new HomePage(page);

        // Navigate to Electronics page
        await electronics.goto();

        // Verify page is loaded
        await electronics.isLoaded();

        // Hover over Kitchen Appliances
        await electronics.hoverKitchenAppliances();

        await page.waitForTimeout(5000);

        // Verify tooltip/title attribute
        await electronics.verifyKitchenAppliancesTooltip();

        // Get tooltip text
        const tooltip =
            await electronics.getKitchenAppliancesTooltip();

        console.log('Tooltip:', tooltip);

        


    });

});