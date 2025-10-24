import { test, expect } from '@playwright/test';

test.describe('jQuery UI Tests', () => {
    
    test('Jquery Droppable', async ({ page }) => {
        // Navigate to the jQuery UI Droppable page
        await page.goto('https://jqueryui.com/droppable/');
        
        // Wait for the page to load completely
        await page.waitForLoadState('networkidle');
        
        // Verify page title
        await expect(page).toHaveTitle(/Droppable/);
        console.log('jQuery UI Droppable page loaded successfully');

        const iframe = page.frameLocator('.demo-frame');
        const dragSource = iframe.locator('#draggable');
        const dropTarget = iframe.locator('#droppable');

        // Verify elements are visible before interaction
        await expect(dragSource).toBeVisible();
        await expect(dropTarget).toBeVisible();
        console.log('Draggable and droppable elements are visible');

        // Verify initial state - drop target should show "Drop here"
        await expect(dropTarget).toContainText('Drop here');
        console.log('Initial drop target text verified: "Drop here"');

        // Verify initial classes/state
        await expect(dropTarget).not.toHaveClass(/ui-state-highlight/);
        console.log('Drop target is in initial state (not highlighted)');

        // Perform drag and drop
        await dragSource.dragTo(dropTarget);
        console.log('Drag and drop operation completed');

        // Verify the drop was successful - text should change to "Dropped!"
        await expect(dropTarget).toContainText('Dropped!');
        console.log('Drop target text changed to "Dropped!" - drag and drop successful');

        // Verify the drop target has the highlight class after drop
        await expect(dropTarget).toHaveClass(/ui-state-highlight/);
        console.log('Drop target is now highlighted after successful drop');

        // Optional: Verify draggable element is still visible and functional
        await expect(dragSource).toBeVisible();
        console.log('Draggable element is still visible after drop');

    });

});