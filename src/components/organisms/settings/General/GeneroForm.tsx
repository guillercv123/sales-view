import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React from "react";
import {Label} from "@/components/ui/label";

export function GeneroForm() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                    Change your password here. After saving, you'll be logged out.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label>Current password</Label>
                    <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                    <Label>New password</Label>
                    <Input id="new" type="password" />
                </div>
            </CardContent>
            <CardFooter>
                <Button>Save password</Button>
            </CardFooter>
        </Card>
    )
}
