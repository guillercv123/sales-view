import React from "react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle } from "lucide-react"; // Importamos icono de alerta
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {clientService} from "@/services/client.service";
import {showToast} from "@/utils/alert";
import {TOAST_TYPES} from "@/constants/alerts";
import {IClienteReq} from "@/types/client.interface";
import {now} from "lodash"; // Asumiendo que tienes componentes de tooltip de shadcn/ui

const NewClientForm = () => {
    const formSchema = z.object({
        fullName: z.string().min(2, {
            message: "El nombre debe tener al menos 2 caracteres.",
        }),
        typeDocument: z.string().min(1, {
            message: "Seleccione un tipo de documento.",
        }),
        numberDocument: z.string().min(1, {
            message: "Ingrese un número de documento.",
        }),
        surname: z.string().min(1, {
            message: "Ingrese los apellidos.",
        }),
        genero: z.string().min(1, {
            message: "Seleccione un género.",
        }),
        phone: z.string().min(1, {
            message: "Ingrese un teléfono.",
        }),
        email: z.string().email({
            message: "Ingrese un correo electrónico válido.",
        }),
    })

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            surname: "",
            typeDocument: "",
            numberDocument: "",
            genero: "",
            phone: "",
            email: "",
        },
    })

    const onSubmit = async (values:any) => {
        const form: IClienteReq = {
            fullName: values.fullName,
            surname: values.surname,
            email: values.email,
            phone: values.phone,
            idTypeDocument: Number(values.typeDocument),
            idGenero: Number(values.genero),
            // @ts-ignore
            createUser: JSON.parse(localStorage.getItem("user")),
            createDate: new Date(),
        }
        const data = await clientService.createClient(form);
        showToast(TOAST_TYPES.SUCCESS, data.message);
    }

    // Componente para mostrar errores en tooltip
    // @ts-ignore
    const ErrorTooltip = ({ name }) => {
        // @ts-ignore
        const error = form.formState.errors[name];

        if (!error) return null;

        return (
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="absolute right-1 top-1/2 -translate-y-1/2">
                            <AlertCircle className="h-4 w-4 text-red-500" />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-red-50 border border-red-200 text-red-700">
                        {error.message}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        );
    }

    return (
        <div className="py-10 px-10">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-wrap gap-4">
                    <FormField
                        control={form.control}
                        name="typeDocument"
                        render={({ field }) => (
                            <FormItem className="w-[10%] min-w-[100px] space-y-2">
                                <FormLabel>Tipo de Doc.</FormLabel>
                                <div className="relative">
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className={form.formState.errors.typeDocument ? "border-red-500 pr-8" : ""}>
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="1">DNI</SelectItem>
                                            <SelectItem value="2">RUC</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <ErrorTooltip name="typeDocument" />
                                </div>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="numberDocument"
                        render={({ field }) => (
                            <FormItem
                                className="w-[15%] min-w-[120px] space-y-2">
                                <FormLabel>Núm. de documento</FormLabel>
                                <div className="relative">
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className={form.formState.errors.numberDocument ? "border-red-500 pr-8" : ""}
                                        />
                                    </FormControl>
                                    <ErrorTooltip name="numberDocument" />
                                </div>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="genero"
                        render={({ field }) => (
                            <FormItem
                                className="w-[13%] min-w-[120px] space-y-2">
                                <FormLabel>Género</FormLabel>
                                <div className="relative">
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className={form.formState.errors.genero ? "border-red-500 pr-8" : ""}>
                                                <SelectValue placeholder="" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="1">MASCULINO</SelectItem>
                                            <SelectItem value="2">FEMENINO</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <ErrorTooltip name="genero" />
                                </div>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem
                                className="w-[23%] min-w-[200px] space-y-2">
                                <FormLabel>Nombre(s)</FormLabel>
                                <div className="relative">
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className={form.formState.errors.fullName ? "border-red-500 pr-8" : ""}
                                        />
                                    </FormControl>
                                    <ErrorTooltip name="fullName" />
                                </div>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="surname"
                        render={({ field }) => (
                            <FormItem
                                className="w-[12%] min-w-[200px] space-y-2">
                                <FormLabel>Apellido(s)</FormLabel>
                                <div className="relative">
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className={form.formState.errors.surname ? "border-red-500 pr-8" : ""}
                                        />
                                    </FormControl>
                                    <ErrorTooltip name="surname" />
                                </div>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem
                                className="w-[12%] min-w-[200px] space-y-2">
                                <FormLabel>Teléfono</FormLabel>
                                <div className="relative">
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className={form.formState.errors.phone ? "border-red-500 pr-8" : ""}
                                        />
                                    </FormControl>
                                    <ErrorTooltip name="phone" />
                                </div>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem
                                className="w-[12%] min-w-[200px] space-y-2">
                                <FormLabel>Correo electrónico</FormLabel>
                                <div className="relative">
                                    <FormControl>
                                        <Input
                                            {...field}
                                            className={form.formState.errors.email ? "border-red-500 pr-8" : ""}
                                        />
                                    </FormControl>
                                    <ErrorTooltip name="email" />
                                </div>
                            </FormItem>
                        )}
                    />
                    <div className="w-full flex justify-start mt-2">
                        <Button type="submit">Guardar</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default NewClientForm;
